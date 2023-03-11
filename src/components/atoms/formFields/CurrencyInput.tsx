import {
  NativeSyntheticEvent,
  Text,
  TextInputFocusEventData,
  View,
} from "react-native";
import React from "react";
import CurrencyInput from "react-native-currency-input";

interface IProps {
  icon?: JSX.Element;
  rightIcon?: JSX.Element;
  onChange?: ((value: number | null) => void) | undefined;
  placeholder: string;
  label?: string;
  value: string;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
}

export const CurrencyField: React.FC<IProps> = ({
  icon,
  onChange,
  label,
  placeholder,
  value,
  rightIcon,
  onBlur,
}) => {
  return (
    <View
      style={{
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#B2BAD5",
        margin: 10,
      }}
    >
      <Text
        style={{
          color: "#2E3A59",
          fontSize: 16,
          fontWeight: "400",
          fontFamily: "poppins",
        }}
      >
        {label}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <>{icon}</>
        <CurrencyInput
          value={Number(value)}
          onChangeValue={onChange}
          style={{ paddingHorizontal: 10, flexGrow: 1 }}
          placeholder={placeholder}
          keyboardType="numeric"
          placeholderTextColor="#B2BAD5"
          precision={0}
          delimiter=","
          separator=","
          onBlur={onBlur}
        />
      </View>
    </View>
  );
};
