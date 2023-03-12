import { useNavigation } from "@react-navigation/native";
import { string } from "zod/lib";
import { SubmitHandler } from "react-hook-form";
import { LoginFormValues } from "../../types/formValues";
import { LoginScreenNavigationProp } from "../../types/navigators";
import { useGlobalContext } from "../../contexts/user";
import * as z from "zod";

export const useLogin = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { loginUser } = useGlobalContext();

  const navigate = () => {
    navigation.replace("Dashboard");
  };

  const schema = z.object({
    email: z
      .string()
      .min(1, { message: "This field is required." })
      .email("Please enter a valid email"),
    password: string(),
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    await loginUser(data?.email);
    navigate();
  };

  return { schema, onSubmit };
};
