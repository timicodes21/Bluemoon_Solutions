import { View, Text, TextInputFocusEventData, TextInput } from "react-native";
import React, { ReactNode } from "react";
import { NativeSyntheticEvent } from "react-native";

interface IProps {
  label: string;
  placeholder?: string;
  onChange: (((text: string) => void) & Function) | undefined;
  value?: string;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  maxLength?: number | undefined;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  keyboardType?: "numeric";
  secureTextEntry?: boolean;
  showLabel?: boolean;
  multiLine?: boolean;
  numberOfLines?: number;
}

const AuthInput: React.FC<IProps> = ({
  label,
  placeholder,
  onChange,
  value,
  onBlur,
  maxLength,
  keyboardType,
  secureTextEntry,
  leftIcon,
  showLabel,
  rightIcon,
  multiLine,
  numberOfLines,
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
      {showLabel && (
        <Text
          style={{
            color: "#2E3A59",
            fontSize: 16,
            fontWeight: "400",
            fontFamily: "poppins",
            paddingVertical: 10,
          }}
        >
          {label}
        </Text>
      )}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <>{leftIcon}</>
        <TextInput
          value={value}
          onChangeText={onChange}
          maxLength={maxLength}
          onBlur={onBlur}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor="#B2BAD5"
          style={{
            paddingHorizontal: leftIcon ? 10 : 0,
            flexGrow: 1,
            textAlignVertical: multiLine ? "top" : "center",
          }}
          multiline={multiLine}
          numberOfLines={numberOfLines}
        />
        <>{rightIcon}</>
      </View>
    </View>
  );
};

export default AuthInput;
