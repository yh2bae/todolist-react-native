import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigation from "./auth-stack-navigation";
import AppStackNavigation from "./app-stack-navigation";
import useUserGlobalStore from "@/store/useUserGlobalStore";
import { useEffect } from "react";

const Navigation = () => {
  const { user, updateUser } = useUserGlobalStore();

  // console.log("user", JSON.stringify(user, null, 2));

  useEffect(() => {
    updateUser(null);
  }, []);

  return (
    <NavigationContainer>
      {user ? <AppStackNavigation /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
