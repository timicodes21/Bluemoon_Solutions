import { View, Text } from "react-native";
import React from "react";
import { loginStyles as styles } from "../../styles/auth/loginStyles";
import AuthInput from "../../components/atoms/formFields/AuthInput";
import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
} from "react-native-heroicons/outline";
import { useForm, Controller } from "react-hook-form";
import { LoginFormValues } from "../../types/formValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../../hooks/auth/useLogin";
import { usePasswordShow } from "../../hooks/utility/usePasswordShow";
import InputErrorText from "../../components/atoms/texts/InputErrorText";
import PrimaryButton from "../../components/atoms/buttons/PrimaryButton";

const LoginScreen = () => {
  const { schema, onSubmit } = useLogin();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const { visible, toggleShow } = usePasswordShow();

  return (
    <View style={{ ...styles.container, justifyContent: "center" }}>
      <View style={styles.shadowWrapper}>
        <View>
          <Text style={styles.headerText}>Login</Text>
          <Text style={styles.bodyText}>Login to manage your inventories</Text>
        </View>
        <View>
          <>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value, onBlur } }) => (
                <AuthInput
                  label="Email"
                  placeholder="Email"
                  onBlur={onBlur}
                  onChange={(value: string) => onChange(value)}
                  leftIcon={<EnvelopeIcon size={25} color="#B2BAD5" />}
                />
              )}
            />
            {errors?.email && (
              <InputErrorText text={errors?.email?.message ?? ""} />
            )}
          </>
          <>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value, onBlur } }) => (
                <AuthInput
                  label="Password"
                  placeholder="Password"
                  onBlur={onBlur}
                  onChange={(value: string) => onChange(value)}
                  leftIcon={<LockClosedIcon size={25} color="#B2BAD5" />}
                  secureTextEntry={!visible}
                  rightIcon={
                    visible ? (
                      <EyeIcon size={25} color="#B2BAD5" onPress={toggleShow} />
                    ) : (
                      <EyeSlashIcon
                        size={25}
                        color="#B2BAD5"
                        onPress={toggleShow}
                      />
                    )
                  }
                />
              )}
            />
            {errors?.password && (
              <InputErrorText text={errors?.password?.message ?? ""} />
            )}
          </>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleSubmit(onSubmit)}>Login</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
