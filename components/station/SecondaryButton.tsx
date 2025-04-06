import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '@/constants/theme';

interface SecondaryButtonProps {
  title: string;
  onPress: () => void;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  borderColor?: string;
  iconSize?: number;
  iconColor?: string;
}

export default function SecondaryButton({
  title,
  onPress,
  icon,
  style,
  textColor = COLORS.primary,
  borderColor = COLORS.primary,
  iconSize = 20,
  iconColor = COLORS.primary,
}: SecondaryButtonProps) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      className="bg-white py-3 px-4 rounded-xl flex-row items-center justify-center shadow-sm active:opacity-80"
      style={[
        { borderWidth: 1, borderColor },
        style,
      ]}
    >
      {icon && (
        <MaterialCommunityIcons 
          name={icon} 
          size={iconSize} 
          color={iconColor} 
          style={{ marginRight: 8 }} 
        />
      )}
      <Text 
        className="font-medium text-base"
        style={{ color: textColor }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}