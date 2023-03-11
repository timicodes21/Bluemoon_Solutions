import { useNavigation } from "@react-navigation/native";
import { DashboardScreenNavigationProp } from "../../types/navigators";

export const useHome = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  const navigate = () => {
    navigation.navigate("CreateInventory");
  };

  return { navigate };
};
