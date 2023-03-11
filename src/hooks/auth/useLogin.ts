import { useNavigation } from "@react-navigation/native";
import { z } from "zod";
import { string } from "zod/lib";
import { SubmitHandler } from "react-hook-form";
import { LoginFormValues } from "../../types/formValues";
import { LoginScreenNavigationProp } from "../../types/navigators";

export const useLogin = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const navigate = () => {
    navigation.navigate("Dashboard");
  };

  const schema = z.object({
    email: z
      .string()
      .min(1, { message: "This field is required." })
      .email("This is not a valid email."),
    password: string(),
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    navigate();
  };

  return { schema, onSubmit };
};
