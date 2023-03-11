import { StatusBar } from "react-native";
import React from "react";

const CustomStatusBar = () => {
  return (
    <StatusBar
      animated={true}
      backgroundColor="#9C2CF3"
      translucent={true}
      barStyle="light-content"
      showHideTransition="fade"
    />
  );
};

export default CustomStatusBar;
