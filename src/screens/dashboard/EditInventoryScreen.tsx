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
import DeleteButton from "../../components/atoms/buttons/DeleteButton";
import { useRoute } from "@react-navigation/native";
import { EditScreenRouteProp } from "../../types/navigators";
import { useEdit } from "../../hooks/home/useEdit";
import CustomModal from "../../components/molecules/modals/CustomModal";

const EditInventoryScreen = () => {
  const { schema } = useCreate();
  const { navigate, onSubmit, onDelete, deleteOpen, setDeleteOpen } = useEdit();

  const route = useRoute<EditScreenRouteProp>();

  const { name, description, price, totalStock } = route.params;

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
      <Text style={styles.headerText}>Edit Item</Text>
      <View style={{ ...loginStyles.shadowWrapper, marginBottom: 100 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <>
            <Controller
              control={control}
              name="name"
              defaultValue={name}
              render={({ field: { onChange, value, onBlur } }) => (
                <AuthInput
                  label="Item Name"
                  placeholder=""
                  onBlur={onBlur}
                  onChange={(value: string) => onChange(value)}
                  showLabel
                  value={value}
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
              defaultValue={totalStock}
              render={({ field: { onChange, value, onBlur } }) => (
                <AuthInput
                  label="Total Stock"
                  showLabel
                  placeholder=""
                  onBlur={onBlur}
                  onChange={(value: string) => onChange(Number(value))}
                  keyboardType="numeric"
                  value={String(value)}
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
              defaultValue={price}
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
              defaultValue={description}
              render={({ field: { onChange, value, onBlur } }) => (
                <AuthInput
                  label="Description"
                  showLabel
                  placeholder=""
                  onBlur={onBlur}
                  onChange={(value: string) => onChange(value)}
                  multiLine
                  numberOfLines={10}
                  value={value}
                />
              )}
            />
            {errors?.name && (
              <InputErrorText text={errors?.name?.message ?? ""} />
            )}
          </>
          <View style={{ ...loginStyles.buttonContainer, marginBottom: 70 }}>
            <PrimaryButton onPress={handleSubmit(onSubmit)}>
              Edit Inventory
            </PrimaryButton>
            <View style={{ marginTop: 10 }}></View>
            <DeleteButton onPress={() => setDeleteOpen(true)}>
              Delete
            </DeleteButton>
          </View>
        </ScrollView>
      </View>
      <CustomModal
        open={deleteOpen}
        setOpen={setDeleteOpen}
        onPressBtn={handleSubmit(onDelete)}
        closeModal={() => setDeleteOpen(false)}
        message="Are you sure you want to delete this inventory?"
      />
    </View>
  );
};

export default EditInventoryScreen;
