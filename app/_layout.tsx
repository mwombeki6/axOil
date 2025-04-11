import { Stack } from "expo-router";
import "./global.css"

export default function RootLayout() {
  return (
    <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown: false, title: 'axOil' }} />
            <Stack.Screen name="station" options={{headerShown: false, title: 'Station' }} />
            <Stack.Screen name="welcome" options={{headerShown: false, title: 'Welcome' }} />
            <Stack.Screen name="phone" options={{headerShown:false, title: 'pHONE' }} />
            <Stack.Screen name="otp" options={{ headerShown: false }} />
            <Stack.Screen name="user" options={{ headerShown: false }} />
        </Stack>
  );
}
