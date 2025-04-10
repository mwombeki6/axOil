import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FeatureCard from '../components/FeatureCard';

// Placeholder for where you would import your actual assets
const FUEL_LOGO = require('../assets/images/react-logo.png');
const GAS_STATION_ICON = require('../assets/station1.png');
const ROUTE_ICON = require('../assets/images/splash-icon.png');
const SAVINGS_ICON = require('../assets/images/react-logo.png');

const WelcomeScreen: React.FC = () => {
  const logoAnimation = useState(new Animated.Value(0))[0];
  const titleAnimation = useState(new Animated.Value(0))[0];

  useEffect(() => {
    // Animate logo
    Animated.timing(logoAnimation, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();

    // Animate title
    Animated.timing(titleAnimation, {
      toValue: 1,
      duration: 1000,
      delay: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  const logoScale = logoAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });

  const logoOpacity = logoAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const titleTranslateY = titleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 0],
  });

  const titleOpacity = titleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#1e3c72', '#2a5298']}
        className="flex-1 px-6 pt-5 pb-10"
      >
        <View className="items-center mt-10 mb-10">
          <Animated.Image
            source={FUEL_LOGO}
            className="w-32 h-32 mb-5"
            style={{
              opacity: logoOpacity,
              transform: [{ scale: logoScale }],
            }}
          />
          <Animated.Text
            className="text-4xl font-bold text-white mb-2"
            style={{
              opacity: titleOpacity,
              transform: [{ translateY: titleTranslateY }],
            }}
          >
            FuelFinder
          </Animated.Text>
          <Animated.Text
            className="text-base text-indigo-100 text-center"
            style={{
              opacity: titleOpacity,
              transform: [{ translateY: titleTranslateY }],
            }}
          >
            Find the best fuel prices near you
          </Animated.Text>
        </View>

        <View className="my-5">
          <FeatureCard
            icon={GAS_STATION_ICON}
            title="Locate Stations"
            description="Find gas stations nearby with real-time fuel prices"
            delay={800}
          />
          <FeatureCard
            icon={ROUTE_ICON}
            title="Optimal Routes"
            description="Get directions to the most economical fuel station"
            delay={1000}
          />
          <FeatureCard
            icon={SAVINGS_ICON}
            title="Save Money"
            description="Track spending and save on every fill-up"
            delay={1200}
          />
        </View>

        <View className="mt-auto">
          <TouchableOpacity 
            className="bg-orange-500 rounded-full py-4 items-center mb-4 shadow"
            activeOpacity={0.8}
          >
            <Text className="text-white text-lg font-bold">Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className="border-2 border-white rounded-full py-4 items-center"
            activeOpacity={0.8}
          >
            <Text className="text-white text-lg font-bold">Sign In</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WelcomeScreen;