import { useOtherUsers, useFindUser } from "./../utility/utility";
import { IInventory, IUser } from "./../../types/details";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { DashboardScreenNavigationProp } from "../../types/navigators";
import { useGlobalContext } from "../../contexts/user";
import { storeUsers } from "../../utils/storage";

export const useHome = () => {
  const [logoutOpen, setLogoutOpen] = useState(false);
  const navigation = useNavigation<DashboardScreenNavigationProp>();
  const { users, setUsers, email } = useGlobalContext();
  const otherUsers = useOtherUsers(email);
  const selectedUser = useFindUser(email);

  const navigate = (screen: "CreateInventory") => {
    navigation.navigate(screen);
  };

  const navigateToEdit = (inventory: IInventory) => {
    navigation.navigate("EditInventory", inventory);
  };

  const logoutUser = async () => {
    setLogoutOpen(false);

    // Set isLoggedin to false for Loggedin user
    const newUser: IUser = {
      ...selectedUser,
      isLoggedIn: false,
    };

    // New User Array
    const allUsers = [...otherUsers, newUser];

    // store details
    await storeUsers(allUsers);
    setUsers(allUsers);

    navigation.replace("Login");
  };

  return { navigate, logoutOpen, setLogoutOpen, logoutUser, navigateToEdit };
};
