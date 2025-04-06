import { Stack } from "expo-router";
import "./global.css"

export default function RootLayout() {
  return (
    <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown: false, title: 'axOil' }} />
            <Stack.Screen name="categories" options={{headerShown: true, title: 'Categories' }} />
            <Stack.Screen name="product" options={{headerShown: true, title: 'Product' }} />
            <Stack.Screen name="cart" options={{presentation: 'modal', title: 'Shopping Cart' }} />
            <Stack.Screen name="auth" options={{ headerShown: true }} />
        </Stack>
  );
}
