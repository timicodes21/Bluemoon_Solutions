import { View, Text } from "react-native";
import React from "react";

interface IProps {
  text: string;
  center?: boolean;
}

const InputErrorText: React.FC<IProps> = ({ text, center }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 12,
          fontWeight: "400",
          fontFamily: "poppins",
          color: "rgba(146, 22, 45, 0.92)",
          textAlign: center ? "center" : "left",
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default InputErrorText;
