import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import FuelTypeCard from "./FuelTypeCard";
import PrimaryButton from "./PrimaryButton";
import { StationType } from "@/types/StationType";
import { FuelType } from "@/types/FuelType";

interface StationLayoutProps {
  station: StationType;
  fuelTypes: FuelType[];
  selectedFuelType: FuelType;
  onSelectFuelType: (fuel: FuelType) => void;
  amount: string;
  onAmountChange: (text: string) => void;
  quantity: string;
  onQuantityChange: (text: string) => void;
  onContinue: () => void;
}

export default function StationLayout({
  station,
  fuelTypes,
  selectedFuelType,
  onSelectFuelType,
  amount,
  onAmountChange,  
  quantity,
  onQuantityChange,
  onContinue
}: StationLayoutProps) {
  return (
    <View className="flex-1 bg-white">
      {/* Station Header Image */}
      <View className="relative">
        <Image
          source={station.image}
          className="w-full h-64"
          resizeMode="cover"
        />
        <TouchableOpacity
          className="absolute top-12 left-4 p-2 rounded-full bg-white/90 shadow-md"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#1F2937" />
        </TouchableOpacity>
      </View>

      {/* Station Content */}
      <View className="px-6 pt-6 -mt-8 bg-white rounded-t-3xl flex-1">
        {/* Station Info */}
        <View className="flex-row justify-between items-start mb-4">
          <View className="flex-1 pr-4">
            <Text className="text-2xl font-bold text-gray-900">{station.name}</Text>
            <Text className="text-gray-600 mt-1">{station.address}</Text>
          </View>
          <View className="flex-row items-center bg-blue-50 px-3 py-1 rounded-lg">
            <Ionicons name="star" size={16} color="#F59E0B" style={{ marginRight: 4 }} />
            <Text className="text-blue-600 font-semibold">{station.rating.toFixed(1)}</Text>
          </View>
        </View>

        {/* Station Details */}
        <View className="mb-6">
          <Text className="text-gray-900 font-semibold text-lg mb-3">Station Info</Text>
          <View className="flex-row justify-between">
            <View className="flex-row items-center">
              <View className="bg-blue-50 p-2 rounded-full mr-2">
                <Ionicons name="time-outline" size={18} color="#3B82F6" />
              </View>
              <Text className="text-gray-800">Open 24 Hours</Text>
            </View>
            <View className="flex-row items-center">
              <View className="bg-blue-50 p-2 rounded-full mr-2">
                <Ionicons name="location-outline" size={18} color="#3B82F6" />
              </View>
              <Text className="text-gray-800">{station.distance.toFixed(1)} km</Text>
            </View>
          </View>
        </View>

        {/* Fuel Type Selection */}
        <View className="mb-6">
          <Text className="text-gray-900 font-semibold text-lg mb-3">Select Fuel Type</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
          >
            {fuelTypes.map((fuel) => (
              <FuelTypeCard
                key={fuel.id}
                type={fuel.type}
                price={fuel.price}
                icon={fuel.icon as React.ComponentProps<typeof MaterialCommunityIcons>["name"]}
                color={fuel.color}
                selected={selectedFuelType.id === fuel.id}
                onPress={() => onSelectFuelType(fuel)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Fuel Amount Input */}
        <View className="mb-8">
          <Text className="text-gray-900 font-semibold text-lg mb-3">Fuel Amount</Text>
          <View className="bg-gray-50 rounded-xl p-4">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-gray-600">Price per liter</Text>
              <Text className="text-gray-900 font-semibold">${selectedFuelType.price.toFixed(2)}</Text>
            </View>

            <View className="flex-row justify-between">
              <View className="bg-white p-3 rounded-xl shadow-sm flex-1 mr-4 items-center">
                <Text className="text-gray-600 mb-1">By Amount</Text>
                <TextInput
                  value={amount}
                  onChangeText={onAmountChange}
                  keyboardType="numeric"
                  placeholder="$0.00"
                  className="text-xl font-bold text-gray-900 w-full text-center"
                  placeholderTextColor="#94A3B8"
                />
              </View>

              <View className="bg-white p-3 rounded-xl shadow-sm flex-1 items-center">
                <Text className="text-gray-600 mb-1">By Quantity</Text>
                <TextInput
                  value={quantity}
                  onChangeText={onQuantityChange}
                  keyboardType="numeric"
                  placeholder="0.00L"
                  className="text-xl font-bold text-gray-900 w-full text-center"
                  placeholderTextColor="#94A3B8"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Continue Button */}
        <PrimaryButton
          title="Continue to Payment"
          onPress={onContinue}
        />
      </View>
    </View>
  );
}