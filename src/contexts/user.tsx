import { createContext, PropsWithChildren, useContext } from "react";
import { useUsers } from "../hooks/utility/useUsers";
import { IGlobalContext } from "../types/details";
import { _clearStorage, _retrieveData, _storeData } from "../utils/storage";

const GlobalContext = createContext({} as IGlobalContext);
const useGlobalContext = () => useContext(GlobalContext);

function GlobalProvider({ children }: PropsWithChildren) {
  const {
    loginUser,
    users,
    inventories,
    setInventories,
    email,
    userId,
    setEmail,
    setUserId,
    setUsers,
  } = useUsers();

  const value: IGlobalContext = {
    users,
    loginUser,
    inventories,
    setInventories,
    email,
    userId,
    setEmail,
    setUserId,
    setUsers,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export { useGlobalContext, GlobalProvider };
