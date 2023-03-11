import { useOtherInventories, useUserInventories } from "./../utility/utility";
import { IInventory, IUser } from "./../../types/details";
import { useNavigation } from "@react-navigation/native";
import { DashboardScreenNavigationProp } from "../../types/navigators";
import { z } from "zod";
import { string, number } from "zod/lib";
import { SubmitHandler } from "react-hook-form";
import { CreateInventoryFormValues } from "../../types/formValues";
import { useFindUser, useOtherUsers } from "../utility/utility";
import { useGlobalContext } from "../../contexts/user";
import { storeInventories } from "../../utils/storage";

export const useCreate = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();
  const { setInventories, inventories, email, userId } = useGlobalContext();

  const user = useFindUser(email);

  const userInventories = useUserInventories(userId);

  const navigate = () => {
    navigation.replace("Dashboard");
  };

  const schema = z
    .object({
      name: string()
        .min(3, { message: "Name should be atleast 3 characters" })
        .max(20, { message: "Item name cannot be more than 20 characters" }),
      price: number({ invalid_type_error: "Please input a valid price" }).min(
        0,
        {
          message: "Please input a valid Price",
        }
      ),
      totalStock: number({
        invalid_type_error: "Total stock is required and must be a number",
      }).min(1, { message: "Total stock is required" }),
      description: string(),
    })
    // Description should be atleast 3 words
    .refine((data) => data?.description?.trim().split(" ").length > 2, {
      path: ["description"],
      message: "Description should have atleast 3 words",
    })
    // Check user inventories if the name already exists
    .refine(
      (data) =>
        !userInventories
          .map((item) => item.name.trim().toLowerCase())
          .includes(data?.name.trim().toLowerCase()),
      {
        path: ["name"],
        message: "This name already exists",
      }
    );

  const onSubmit: SubmitHandler<CreateInventoryFormValues> = async (data) => {
    const newInventory: IInventory = {
      ...data,
      inventoryId: Date.now().toString(),
      userId: user.userId,
    };

    const allInventories = [...inventories, newInventory];

    await storeInventories(allInventories);
    setInventories(allInventories);

    navigate();
  };

  return { navigate, schema, onSubmit };
};
