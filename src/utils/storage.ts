import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "../types/details";

export const _storeData = async <T>(key: "users", value: T | T[]) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Error saving data
    return null;
  }
};

export const storeUsers = async (data: IUser[]) => {
  return await _storeData<IUser[]>("users", data);
};

export const _retrieveData = async (key: "users") => {
  try {
    const value = await AsyncStorage.getItem(key);
    const result = value ? JSON.parse(value) : [];
    if (result) {
      return result;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const retrieveUsers = async () => {
  const users = await _retrieveData("users");
  return users;
};

export const _clearStorage = async () => {
  AsyncStorage.clear();
};
