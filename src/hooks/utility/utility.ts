import { useGlobalContext } from "../../contexts/user";
import { IInventory, IUser } from "../../types/details";

// Hook that finds user and returns the user object based on the mail
export const useFindUser = (email: string): IUser => {
  const { users } = useGlobalContext();
  const user = users.find((user) => user.email === email);
  return user ? user : { userId: "", email: "", isLoggedIn: false };
};

export const useOtherUsers = (email: string): IUser[] => {
  const { users } = useGlobalContext();
  const otherUsers = users.filter((user) => user.email !== email);
  return otherUsers;
};

// Hook that finds a single Inventory
export const useFindInventory = (id: string): IInventory => {
  const { inventories } = useGlobalContext();
  const inventory = inventories.find((item) => item.inventoryId === id);
  return inventory
    ? inventory
    : {
        price: 0,
        description: "",
        totalStock: 0,
        userId: "",
        inventoryId: "",
        name: "",
      };
};

export const useOtherInventories = (id: string): IInventory[] => {
  const { inventories } = useGlobalContext();
  const otherInventories = inventories.filter(
    (item) => item.inventoryId !== id
  );
  return otherInventories;
};

export const useUserInventories = (userId: string): IInventory[] => {
  const { inventories } = useGlobalContext();
  const userInventories = inventories.filter((item) => item?.userId === userId);
  return userInventories;
};
