import React, { ReactNode } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface IProps {
  children: ReactNode;
  onPress: () => void;
  icon?: ReactNode;
}

const DeleteButton: React.FC<IProps> = ({ children, onPress, icon }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "100%",
        paddingVertical: 9,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#BA2B17",
      }}
    >
      {icon && <View style={{ marginRight: 5 }}>{icon}</View>}
      <Text
        style={{
          color: "#BA2B17",
          fontFamily: "poppinsMedium",
          fontWeight: "600",
          fontSize: 20,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default DeleteButton;
