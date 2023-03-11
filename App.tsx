import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainStackParamList } from "./src/types/navigators";
import { useFonts } from "expo-font";
import CustomStatusBar from "./src/components/molecules/statusBar/CustomStatusBar";
import SplashScreen from "./src/screens/auth/SplashScreen";
import LoginScreen from "./src/screens/auth/LoginScreen";
import HomeScreen from "./src/screens/dashboard/HomeScreen";
import CreateInventoryScreen from "./src/screens/dashboard/CreateInventoryScreen";
import EditInventoryScreen from "./src/screens/dashboard/EditInventoryScreen";
import { GlobalProvider } from "./src/contexts/user";

export default function App() {
  const Stack = createStackNavigator<MainStackParamList>();
  const [loaded] = useFonts({
    poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    poppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    poppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
    poppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    poppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <GlobalProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Dashboard"
            component={HomeScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>

          <Stack.Screen
            name="CreateInventory"
            component={CreateInventoryScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="EditInventory"
            component={EditInventoryScreen}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </GlobalProvider>
      <CustomStatusBar />
    </NavigationContainer>
  );
}
