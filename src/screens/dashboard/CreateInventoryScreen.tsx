import { View, Text, ScrollView } from "react-native";
import React from "react";
import { createStyles as styles } from "../../styles/home/createStyles";
import CreateHeader from "../../components/organism/headers/CreateHeader";
import { useCreate } from "../../hooks/home/useCreate";
import AuthInput from "../../components/atoms/formFields/AuthInput";
import { useForm, Controller } from "react-hook-form";
import { CreateInventoryFormValues } from "../../types/formValues";
import { zodResolver } from "@hookform/resolvers/zod";
import InputErrorText from "../../components/atoms/texts/InputErrorText";
import { CurrencyField } from "../../components/atoms/formFields/CurrencyInput";
import PrimaryButton from "../../components/atoms/buttons/PrimaryButton";
import { loginStyles } from "../../styles/auth/loginStyles";

const CreateInventoryScreen = () => {
  const { navigate, schema, onSubmit } = useCreate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateInventoryFormValues>({
    mode: "all",
    resolver: zodResolver(schema),
  });
  return (
    <View style={styles.container}>
      <View>
        <CreateHeader goBack={navigate} />
      </View>
      <Text style={styles.headerText}>Add Inventory</Text>
      <View style={{ ...loginStyles.shadowWrapper, marginBottom: 100 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value, onBlur } }) => (
                <AuthInput
                  label="Name"
                  placeholder=""
                  onBlur={onBlur}
                  onChange={(value: string) => onChange(value)}
                  showLabel
                />
              )}
            />
            {errors?.name && (
              <InputErrorText text={errors?.name?.message ?? ""} />
            )}
          </>
          <>
            <Controller
              control={control}
              name="totalStock"
              render={({ field: { onChange, value, onBlur } }) => (
                <AuthInput
                  label="Total Stock"
                  showLabel
                  placeholder=""
                  onBlur={onBlur}
                  onChange={(value: string) => onChange(Number(value))}
                  keyboardType="numeric"
                />
              )}
            />
            {errors?.name && (
              <InputErrorText text={errors?.name?.message ?? ""} />
            )}
          </>
          <>
            <Controller
              control={control}
              name="price"
              render={({ field: { onChange, value, onBlur } }) => (
                <CurrencyField
                  placeholder=""
                  label="Price"
                  value={String(value)}
                  onBlur={onBlur}
                  onChange={(value: number | null) => onChange(value)}
                />
              )}
            />
            {errors?.name && (
              <InputErrorText text={errors?.name?.message ?? ""} />
            )}
          </>
          <>
            <Controller
              control={control}
              name="description"
              render={({ field: { onChange, value, onBlur } }) => (
                <AuthInput
                  label="Description"
                  showLabel
                  placeholder=""
                  onBlur={onBlur}
                  onChange={(value: string) => onChange(value)}
                  multiLine
                  numberOfLines={10}
                />
              )}
            />
            {errors?.name && (
              <InputErrorText text={errors?.name?.message ?? ""} />
            )}
          </>
          <View style={{ ...loginStyles.buttonContainer, marginBottom: 70 }}>
            <PrimaryButton onPress={handleSubmit(onSubmit)}>
              Add Inventory
            </PrimaryButton>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CreateInventoryScreen;
