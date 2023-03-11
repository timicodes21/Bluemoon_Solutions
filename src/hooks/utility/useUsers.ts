import { IInventory } from "./../../types/details";
import { retrieveInventories, _clearStorage } from "./../../utils/storage";
import { useEffect, useState } from "react";
import { IUser } from "../../types/details";
import { retrieveUsers, storeUsers } from "../../utils/storage";

export const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [inventories, setInventories] = useState<IInventory[]>([]);
  useEffect(() => {
    retrieveUsers().then((data: IUser[]) => {
      setUsers(data);
    });
    retrieveInventories().then((data: IInventory[]) => {
      setInventories(data);
    });
  }, []);

  const loginUser = async (email: string) => {
    // Check if user exists again in the database
    const userExists = users.filter((user) => user.email === email);

    // Return user if user exists in database
    if (userExists.length > 0) {
      return;
    }

    // New user object
    const details: IUser = {
      email,
      userId: Date.now().toString(),
      isLoggedIn: true,
    };

    // Logout previous users
    const loggedOutUsers =
      users.length > 0
        ? users.map((user) => {
            return { ...user, isLoggedIn: false };
          })
        : [];
    console.log("logged out users", loggedOutUsers);

    // Add user to the database
    await storeUsers([...loggedOutUsers, details]);
    setUsers([...loggedOutUsers, details]);
  };

  // Email of logged in user
  return { loginUser, users, setUsers, inventories };
};
