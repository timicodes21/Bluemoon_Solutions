import { useGlobalContext } from "../../contexts/user";
import { IInventory, IUser } from "../../types/details";

// Hook that generates logged in user's email
export const useEmail = () => {
  const { users } = useGlobalContext();
  const email = users.filter((user) => {
    return user.isLoggedIn ? user.email : "";
  })[0].email;
  return { email };
};

// Hook that finds user and returns the user object based on the mail
export const useFindUser = (email: string): IUser | {} => {
  const { users } = useGlobalContext();
  const user = users.find((user) => user.email === email);
  return user ? user : {};
};

export const useOtherUsers = (email: string): IUser[] => {
  const { users } = useGlobalContext();
  const otherUsers = users.filter((user) => user.email !== email);
  return otherUsers;
};

// Hook that finds a single Inventory
export const useFindInventory = (id: string): IInventory | {} => {
  const { inventories } = useGlobalContext();
  const inventory = inventories.find((item) => item.inventoryId === id);
  return inventory ? inventory : {};
};

export const useOtherInventories = (id: string): IInventory[] => {
  const { inventories } = useGlobalContext();
  const otherInventories = inventories.filter(
    (item) => item.inventoryId !== id
  );
  return otherInventories;
};
