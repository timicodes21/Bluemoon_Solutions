import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";
import { IInventory } from "./details";

export type MainStackParamList = {
  Splash: undefined;
  Login: undefined;
  Dashboard: undefined;
  CreateInventory: undefined;
  EditInventory: IInventory;
};

// Navigation and Route Type
// type WelcomeScreenNavigationProp = WelcomeProps["navigation"];
// type WelcomeScreenRouteProp = WelcomeProps["route"];
export type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  "Splash"
>;

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  "Login"
>;

export type DashboardScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  "Dashboard"
>;

export type CreateScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  "CreateInventory"
>;

export type EditScreenRouteProp = RouteProp<
  MainStackParamList,
  "EditInventory"
>;

export type EditScreenProps = NativeStackScreenProps<
  MainStackParamList,
  "EditInventory"
>;
