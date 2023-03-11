import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useGlobalContext } from "../../contexts/user";
import { IUser } from "../../types/details";
import { DashboardScreenNavigationProp } from "../../types/navigators";
import { retrieveUsers, storeUsers } from "../../utils/storage";

export const useSplash = () => {
  const { setUserId, setEmail, setUsers } = useGlobalContext();
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  useEffect(() => {
    retrieveUsers().then((data: IUser[]) => {
      const loggedInUser = data?.filter((item) => item?.isLoggedIn);
      if (loggedInUser.length > 0) {
        const user = data.find(
          (user) => user?.userId === loggedInUser[0].userId
        );
        const otherUsers = data.filter(
          (user) => user.userId !== loggedInUser[0].userId
        );
        const newUser: IUser = {
          email: user?.email ?? "",
          userId: user?.userId ?? "",
          isLoggedIn: true,
        };
        setUserId(loggedInUser[0].userId);
        setEmail(loggedInUser[0].email);
        storeUsers([newUser, ...otherUsers]);
        setUsers([newUser, ...otherUsers]);
        navigation.replace("Dashboard");
      } else {
        navigation.replace("Login");
      }
    });
  }, []);

  return {};
};
