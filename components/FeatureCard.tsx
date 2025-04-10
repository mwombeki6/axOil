import React, { useState, useEffect } from 'react';
import { View, Text, Image, Animated } from 'react-native';

interface FeatureCardProps {
  icon: any;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const animation = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 800,
      delay,
      useNativeDriver: true,
    }).start();
  }, []);

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  const opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <Animated.View 
      className="bg-white bg-opacity-90 rounded-xl p-5 mb-4 flex-row items-center shadow-sm"
      style={{ opacity, transform: [{ translateY }] }}
    >
      <Image source={icon} className="w-12 h-12 mr-4" />
      <View className="flex-1">
        <Text className="text-lg font-bold text-blue-900 mb-1">{title}</Text>
        <Text className="text-sm text-gray-600">{description}</Text>
      </View>
    </Animated.View>
  );
};

export default FeatureCard;