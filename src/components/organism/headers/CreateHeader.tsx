import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { homeStyles as styles } from "../../../styles/home/homeStyles";
import {
  ArrowLeftIcon,
  ArrowLeftOnRectangleIcon,
} from "react-native-heroicons/outline";
import { UserCircleIcon } from "react-native-heroicons/solid";

interface IProps {
  goBack: () => void;
}

const CreateHeader: React.FC<IProps> = ({ goBack }) => {
  return (
    <View style={styles.homeHeaderContainer}>
      <TouchableOpacity onPress={goBack}>
        <ArrowLeftIcon color="#2E3A59" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default CreateHeader;
