import { IInventory } from "./../../types/details";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { DashboardScreenNavigationProp } from "../../types/navigators";

export const useHome = () => {
  const [logoutOpen, setLogoutOpen] = useState(false);
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  const navigate = (screen: "CreateInventory") => {
    navigation.navigate(screen);
  };

  const navigateToEdit = (inventory: IInventory) => {
    navigation.navigate("EditInventory", inventory);
  };

  const logoutUser = () => {
    navigation.navigate("Login");
  };

  return { navigate, logoutOpen, setLogoutOpen, logoutUser, navigateToEdit };
};
