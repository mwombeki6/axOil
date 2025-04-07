// components/station/FuelTypeCard.tsx
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

type FuelTypeCardProps = {
  type: string;
  price: number;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color: string;
  selected: boolean;
  onPress: () => void;
};

export default function FuelTypeCard({
  type,
  price,
  icon,
  color,
  selected,
  onPress,
}: FuelTypeCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`p-4 mr-3 rounded-xl ${
        selected ? "bg-blue-100 border border-blue-500" : "bg-gray-50"
      }`}
      activeOpacity={0.8}
    >
      <View className="flex-row items-center mb-2">
        <MaterialCommunityIcons 
          name={icon} 
          size={24} 
          color={selected ? COLORS.primary : color} 
        />
        <Text className="ml-2 font-medium text-gray-800">{type}</Text>
      </View>
      <Text className="text-lg font-bold text-gray-900">
        Tshs{price.toFixed(2)}/L
      </Text>
    </TouchableOpacity>
  );
}