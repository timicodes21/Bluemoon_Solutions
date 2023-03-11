import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { homeStyles as styles } from "../../../styles/home/homeStyles";
import { ArrowLeftOnRectangleIcon } from "react-native-heroicons/outline";
import { UserCircleIcon } from "react-native-heroicons/solid";

interface IProps {
  logoutUser: () => void;
}

const HomeHeader: React.FC<IProps> = ({ logoutUser }) => {
  return (
    <View style={styles.homeHeaderContainer}>
      <TouchableOpacity>
        <UserCircleIcon color="#2E3A59" size={35} />
      </TouchableOpacity>
      <TouchableOpacity onPress={logoutUser}>
        <ArrowLeftOnRectangleIcon color="#2E3A59" size={35} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
