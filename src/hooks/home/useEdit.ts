import { useFindInventory } from "./../utility/utility";
import { EditScreenRouteProp } from "./../../types/navigators";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DashboardScreenNavigationProp } from "../../types/navigators";
import { SubmitHandler } from "react-hook-form";
import { CreateInventoryFormValues } from "../../types/formValues";
import { storeInventories } from "../../utils/storage";
import { useFindUser, useOtherInventories } from "../utility/utility";
import { useGlobalContext } from "../../contexts/user";
import { IInventory } from "../../types/details";
import { useState } from "react";

export const useEdit = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();
  const [deleteOpen, setDeleteOpen] = useState(false);

  const route = useRoute<EditScreenRouteProp>();

  const { inventoryId } = route.params;

  console.log("inventory id hook", inventoryId);

  const otherInventories = useOtherInventories(inventoryId);
  const selectedInventory = useFindInventory(inventoryId);

  console.log(
    "other inventories and selectde",
    otherInventories,
    selectedInventory
  );
  const { setInventories, email } = useGlobalContext();

  const user = useFindUser(email);

  const navigate = () => {
    navigation.navigate("Dashboard");
  };

  const onSubmit: SubmitHandler<CreateInventoryFormValues> = async (data) => {
    const newInventory: IInventory = {
      ...data,
      inventoryId: selectedInventory?.inventoryId,
      userId: selectedInventory?.userId,
    };

    const allInventories = [...otherInventories, newInventory];

    await storeInventories(allInventories);
    setInventories(allInventories);

    navigate();
  };

  const onDelete: SubmitHandler<CreateInventoryFormValues> = async (data) => {
    const allInventories = [...otherInventories];

    await storeInventories(allInventories);
    setInventories(allInventories);

    navigate();
  };

  return { onSubmit, navigate, onDelete, deleteOpen, setDeleteOpen };
};
