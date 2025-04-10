import { Stack } from "expo-router";
import "./global.css"

export default function RootLayout() {
  return (
    <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown: false, title: 'axOil' }} />
            <Stack.Screen name="station" options={{headerShown: false, title: 'Station' }} />
            <Stack.Screen name="welcome" options={{headerShown: false, title: 'Welcome' }} />
            <Stack.Screen name="cart" options={{presentation: 'modal', title: 'Shopping Cart' }} />
            <Stack.Screen name="auth" options={{ headerShown: true }} />
        </Stack>
  );
}
