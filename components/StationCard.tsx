import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface StationCardProps {
  name: string;
  address: string;
  distance: string | number;
  rating: number;
  image: ImageSourcePropType;
  onPress: () => void;
  isFavorite?: boolean;
  price?: string;
  promotion?: string;
}

export default function StationCard({
  name,
  address,
  distance,
  rating,
  image,
  onPress,
  isFavorite = false,
  price,
  promotion
}: StationCardProps) {
  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <Ionicons
        key={star}
        name={star <= Math.floor(rating) ? "star" : "star-outline"}
        size={16}
        color={star <= Math.floor(rating) ? "#F59E0B" : "#CBD5E1"}
        style={{ marginRight: 4 }}
      />
    ));
  };

  return (
    <TouchableOpacity 
      onPress={onPress}
      className="bg-white rounded-3xl overflow-hidden shadow-lg mb-4 border border-gray-100"
      activeOpacity={0.9}
      accessibilityRole="button"
      accessibilityLabel={`${name} gas station, ${distance} km away, rated ${rating} stars`}
    >
      <View className="relative">
        <Image
          source={image}
          className="w-full h-32 rounded-3xl"
          resizeMode="cover"
          accessibilityIgnoresInvertColors
        />
        {promotion && (
          <View className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded-lg">
            <Text className="text-white text-xs font-bold">{promotion}</Text>
          </View>
        )}
        <TouchableOpacity 
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm"
          onPress={(e) => {
            e.stopPropagation();
            // Handle favorite toggle
          }}
        >
          <Ionicons 
            name={isFavorite ? "heart" : "heart-outline"} 
            size={20} 
            color={isFavorite ? "#FF6347" : "#CBD5E1"} 
          />
        </TouchableOpacity>
      </View>

      <View className="p-4">
        <View className="flex-row justify-between items-start">
          <View className="flex-1">
            <Text 
              className="text-lg font-bold text-gray-800"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {name}
            </Text>
            <Text 
              className="text-gray-500 text-sm mt-1"
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {address}
            </Text>
          </View>
          <View className="items-end">
            <View className="bg-blue-50 px-2 py-1 rounded-2xl">
              <Text className="text-blue-500 font-semibold">
                {typeof distance === 'number' ? `${distance} km` : distance}
              </Text>
            </View>
            {price && (
              <Text className="text-green-600 font-bold mt-1 text-sm">
                ${price}
              </Text>
            )}
          </View>
        </View>

        <View className="flex-row justify-between items-center mt-3">
          <View className="flex-row items-center">
            {renderStars()}
            <Text className="text-gray-500 ml-1 text-sm">
              {rating.toFixed(1)}
            </Text>
          </View>
          
          <View className="flex-row items-center">
            <Ionicons name="time-outline" size={14} color="#6B7280" />
            <Text className="text-gray-500 ml-1 text-sm">Open 24/7</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}