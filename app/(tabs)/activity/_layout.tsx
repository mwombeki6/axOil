import {Stack, Tabs} from 'expo-router';

export default function ActivityLayout() {
    return (
      <Stack>
          <Stack.Screen name="index" options={{headerShown: false}} />
      </Stack>
    );
}