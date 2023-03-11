import { useFindInventory, useUserInventories } from "./../utility/utility";
import { EditScreenRouteProp } from "./../../types/navigators";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DashboardScreenNavigationProp } from "../../types/navigators";
import { SubmitHandler } from "react-hook-form";
import { CreateInventoryFormValues } from "../../types/formValues";
import { storeInventories } from "../../utils/storage";
import { useOtherInventories } from "../utility/utility";
import { useGlobalContext } from "../../contexts/user";
import { IInventory } from "../../types/details";
import { useState } from "react";
import { z } from "zod";
import { string, number } from "zod/lib";

export const useEdit = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();
  const [deleteOpen, setDeleteOpen] = useState(false);

  const route = useRoute<EditScreenRouteProp>();
  const { inventoryId } = route.params;
  const otherInventories = useOtherInventories(inventoryId);
  const selectedInventory = useFindInventory(inventoryId);

  const { setInventories, userId } = useGlobalContext();

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
          .filter((item) => item?.inventoryId !== inventoryId)
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
      inventoryId: selectedInventory?.inventoryId,
      userId: selectedInventory?.userId,
    };

    const allInventories = [newInventory, ...otherInventories];

    await storeInventories(allInventories);
    setInventories(allInventories);

    navigate();
  };

  const onDelete = async () => {
    const allInventories = [...otherInventories];

    await storeInventories(allInventories);
    setInventories(allInventories);

    navigate();
  };

  return { onSubmit, navigate, onDelete, deleteOpen, setDeleteOpen, schema };
};
