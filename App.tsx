import { StatusBar } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import theme from "@/utils/theme";
import Navigation from "@/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
 
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar translucent />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
