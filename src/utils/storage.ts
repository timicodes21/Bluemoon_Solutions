import AsyncStorage from "@react-native-async-storage/async-storage";
import { IInventory, IUser } from "../types/details";

export const _storeData = async <T>(
  key: "users" | "inventories",
  value: T | T[]
) => {
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

export const storeInventories = async (data: IInventory[]) => {
  return await _storeData<IInventory[]>("inventories", data);
};

export const _retrieveData = async (key: "users" | "inventories") => {
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

export const retrieveInventories = async () => {
  const inventories = await _retrieveData("inventories");
  return inventories;
};

export const _clearStorage = async () => {
  AsyncStorage.clear();
};
