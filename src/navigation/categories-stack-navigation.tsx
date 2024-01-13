import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesStackParamList, HomeStackParamList } from "./types";
import CategoriesScreen from "@/screens/categories";
import CategoryScreen from "@/screens/category";

const Stack = createNativeStackNavigator<CategoriesStackParamList>();

const CategoriesStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CategoriesStackNavigation;
