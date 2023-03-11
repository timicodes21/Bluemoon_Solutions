import { useNavigation } from "@react-navigation/native";
import { DashboardScreenNavigationProp } from "../../types/navigators";
import { z } from "zod";
import { string, number } from "zod/lib";
import { SubmitHandler } from "react-hook-form";
import { CreateInventoryFormValues } from "../../types/formValues";

export const useEdit = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();
};
