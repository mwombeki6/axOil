import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text } from 'react-native';

type TabRoute = 'index' | 'activity' | 'profile';

const TAB_ICONS: Record<TabRoute, { focused: keyof typeof Ionicons.glyphMap; unfocused: keyof typeof Ionicons.glyphMap }> = {
  index: { focused: 'home', unfocused: 'home-outline' },
  activity: { focused: 'pulse', unfocused: 'pulse-outline' },
  profile: { focused: 'person', unfocused: 'person-outline' },
};

const HEADER_STYLES = {
  default: {
    headerStyle: { backgroundColor: '#FFFFFF' },
    headerTitleStyle: { color: '#3B82F6', fontSize: 20, fontWeight: '600' },
    headerTintColor: '#3B82F6',
  },
  colored: {
    headerStyle: { backgroundColor: '#FF6347' },
    headerTitleStyle: { color: '#FFFFFF', fontSize: 20, fontWeight: '600' },
    headerTintColor: '#FFFFFF',
  },
};

export default function TabsLayout() {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <Tabs
        screenOptions={({ route }: { route: { name: TabRoute } }) => ({
          tabBarIcon: ({ focused, color, size }: { 
            focused: boolean; 
            color: string; 
            size: number 
          }) => {
            const iconSet = TAB_ICONS[route.name];
            const iconName = focused ? iconSet.focused : iconSet.unfocused;
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF6347',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            borderTopWidth: 0,
            elevation: 8,
            shadowOpacity: 0.1,
            shadowRadius: 4,
            shadowOffset: { height: -2, width: 0 },
          },
          ...HEADER_STYLES.default,
        })}
      >
        <Tabs.Screen 
          name="index" 
          options={{
            title: 'Home',
            headerTitle: () => (
              <Text style={{
                color: '#3B82F6',
                fontSize: 28,  //
                fontWeight: '700',
                fontFamily: 'Inter_600SemiBold',
                letterSpacing: 0.5 
              }}>
                axOil
              </Text>
            ),
            headerRight: () => (
              <Ionicons 
                name="notifications-outline" 
                size={24} 
                color="#3B82F6" 
                style={{ marginRight: 16 }}
              />
            ),
          }} 
        />
        <Tabs.Screen 
          name="activity" 
          options={{
            title: 'Activities',
            headerTitle: 'My Activities',
            ...HEADER_STYLES.colored,
          }} 
        />
        <Tabs.Screen 
          name="profile" 
          options={{
            title: 'Profile',
            headerTitle: 'My Profile',
            ...HEADER_STYLES.colored,
          }} 
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});