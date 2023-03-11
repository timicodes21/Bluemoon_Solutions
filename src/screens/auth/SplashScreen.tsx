import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { splashStyles as styles } from "../../styles/auth/splashStyles";
import { useSplash } from "../../hooks/auth/useSplash";

const SplashScreen = () => {
  useSplash();
  return (
    <View style={styles.container}>
      <View>
        <ActivityIndicator size="large" color="#9C2CF3" />
      </View>
    </View>
  );
};

export default SplashScreen;
