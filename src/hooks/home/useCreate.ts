import { useOtherInventories } from "./../utility/utility";
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
  const { setInventories, inventories, email } = useGlobalContext();

  const user = useFindUser(email);

  console.log("loggedin user", user);

  const navigate = () => {
    navigation.navigate("Dashboard");
  };

  const schema = z.object({
    name: string(),
    price: number().min(0, { message: "Please input a valid Price" }),
    totalStock: number().min(0, { message: "Total stock is required" }),
    description: string(),
  });

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
    console.log("done");
  };

  return { navigate, schema, onSubmit };
};
