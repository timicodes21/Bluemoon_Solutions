import { View, Text, ScrollView } from "react-native";
import React, { ReactNode } from "react";
import { loginStyles as styles } from "../../../styles/auth/login";
import { useIcons } from "../../../hooks/utility/useIcons";

interface IProps {
  children: ReactNode;
}

const AuthWrapper: React.FC<IProps> = ({ children }) => {
  const { AudiIcon } = useIcons();
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.logoContainer}>
          <View style={styles.imageContainer}>
            <AudiIcon width={30} height={30} />
          </View>
          <Text style={styles.logoText}>AudiBox</Text>
        </View>

        <View style={styles.whiteWrapper}>{children}</View>
      </ScrollView>
    </View>
  );
};

export default AuthWrapper;
