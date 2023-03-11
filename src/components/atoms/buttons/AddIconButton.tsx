import React from "react";
import { PlusIcon } from "react-native-heroicons/outline";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

interface IProps {
  onPress: () => void;
}

const AddIconButton: React.FC<IProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={["#9C2CF3", "#3A49F9"]}
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          right: 12,
          bottom: 10,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PlusIcon color="#FFF" size={35} strokeWidth={3} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default AddIconButton;
