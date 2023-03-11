export interface IInventory {
  name: string;
  totalStock: number;
  price: number;
  options?: string;
}

export interface IUser {
  email: string;
  userId: string;
  isLoggedIn: boolean;
  inventories: IInventory[];
}

export interface IGlobalContext {
  users: IUser[];
  loginUser: (email: string) => Promise<void>;
}
