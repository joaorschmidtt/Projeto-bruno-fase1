import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  NavigationContainer,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";


import { useColorScheme } from "@/hooks/useColorScheme";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CartProvider } from "@/context/cartContext";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CartProvider>
     
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="welcome" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="register" options={{ headerShown: false }} />
          <Stack.Screen name="finalizarCompra "options={{ title: 'Finalizar Compra ', headerStyle: { backgroundColor: 'black' },headerTintColor: 'white', }} />
          <Stack.Screen name="products"options={{title: 'Produtos',  headerStyle: { backgroundColor: 'black' },headerTintColor: 'white',}}/>
          <Stack.Screen name="cart"options={{title: 'Carrinho',  headerStyle: { backgroundColor: 'black' },headerTintColor: 'white',}}/>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
     
      </CartProvider>
    </GestureHandlerRootView>
  );
}
