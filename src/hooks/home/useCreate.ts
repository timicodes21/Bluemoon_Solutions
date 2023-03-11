import { useNavigation } from "@react-navigation/native";
import { DashboardScreenNavigationProp } from "../../types/navigators";
import { z } from "zod";
import { string, number } from "zod/lib";
import { SubmitHandler } from "react-hook-form";
import { CreateInventoryFormValues } from "../../types/formValues";

export const useCreate = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  const navigate = () => {
    navigation.navigate("Dashboard");
  };

  const schema = z.object({
    name: string(),
    price: number().min(0, { message: "Please input a valid Price" }),
    totalStock: number().min(0, { message: "Total stock is required" }),
    description: string(),
  });

  const onSubmit: SubmitHandler<CreateInventoryFormValues> = (data) => {
    console.log("data", data);
    navigate();
  };

  return { navigate, schema, onSubmit };
};
