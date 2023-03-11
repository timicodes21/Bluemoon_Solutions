import React, { ReactNode } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface IProps {
  children: ReactNode;
  onPress: () => void;
  outlined?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  small?: boolean;
}

const PrimaryButton: React.FC<IProps> = ({
  children,
  onPress,
  outlined,
  icon,
  disabled,
  small,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={["#9C2CF3", "#3A49F9"]}
        style={{
          width: "100%",
          paddingVertical: small ? 6 : 10,
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon && <View style={{ marginRight: 5 }}>{icon}</View>}
        <Text
          style={{
            color: outlined ? "#2CB67D" : "#FFFFFF",
            fontFamily: "poppinsMedium",
            fontWeight: "600",
            fontSize: 20,
          }}
        >
          {children}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
