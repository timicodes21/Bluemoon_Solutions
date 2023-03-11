import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useUsers } from "../hooks/utility/useUsers";
import { IGlobalContext, IUser } from "../types/details";
import { _clearStorage, _retrieveData, _storeData } from "../utils/storage";

const GlobalContext = createContext({} as IGlobalContext);
const useGlobalContext = () => useContext(GlobalContext);

function GlobalProvider({ children }: PropsWithChildren) {
  const { loginUser, users, inventories } = useUsers();

  return (
    <GlobalContext.Provider value={{ users, loginUser, inventories }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { useGlobalContext, GlobalProvider };
