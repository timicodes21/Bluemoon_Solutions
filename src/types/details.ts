export interface IInventory {
  name: string;
  totalStock: number;
  price: number;
  description?: string;
  inventoryId: string;
  userId: string;
}

export interface IUser {
  email: string;
  userId: string;
  isLoggedIn: boolean;
}

export interface IGlobalContext {
  users: IUser[];
  loginUser: (email: string) => Promise<void>;
  inventories: IInventory[];
  setInventories: React.Dispatch<React.SetStateAction<IInventory[]>>;
  email: string;
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}
