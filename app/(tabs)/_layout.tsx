import { Ionicons, Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from "react-native";

type TabRoute = 'index' | 'activity' | 'profile'

export default function TabsLayout() {

    return (
        <SafeAreaView edges={['top']} style={[styles.safeArea]}>
            <Tabs screenOptions={({ route }: { route: { name: TabRoute } }) => ({
                tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number; }) => {
                    let iconName: keyof typeof Ionicons.glyphMap = 'home';

                    if (route.name === 'index') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'activity') {
                        iconName = focused ? 'pulse' : 'pulse-outline';
                    } else if (route.name === 'profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#FF6347',
                tabBarInactiveTintColor: 'gray',
            })}>
                <Tabs.Screen name="index" options={{
                    title: 'Home',
                    headerTitle: 'Home',
                    headerStyle: { backgroundColor: '#FF6347' },
                    headerTintColor: '#fff'
                }} />
                <Tabs.Screen name="activity" options={{
                    title: 'Activities',
                    headerTitle: 'My Activities',
                    headerStyle: { backgroundColor: '#FF6347' },
                    headerTintColor: '#fff'
                }} />
                <Tabs.Screen name="profile" options={{
                    title: 'Profile',
                    headerTitle: 'My Profile',
                    headerStyle: { backgroundColor: '#FF6347' },
                    headerTintColor: '#fff'
                }} />
            </Tabs>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    }
});