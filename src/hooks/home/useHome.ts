import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { DashboardScreenNavigationProp } from "../../types/navigators";

export const useHome = () => {
  const [logoutOpen, setLogoutOpen] = useState(false);
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  const navigate = (screen: "CreateInventory" | "EditInventory") => {
    navigation.navigate(screen);
  };

  const logoutUser = () => {
    navigation.navigate("Login");
  };

  return { navigate, logoutOpen, setLogoutOpen, logoutUser };
};
