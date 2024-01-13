import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./types";
import WelcomeScreen from "@/screens/welcome";
import SignInScreen from "@/screens/sign-in";
import SignUpScreen from "@/screens/sign-up";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        options={{
          headerShown: false,
        }}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name="SignIn"
        options={{
          headerShown: false,
        }}
        component={SignInScreen}
      />
      <Stack.Screen
        name="SignUp"
        options={{
          headerShown: false,
        }}
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigation;
