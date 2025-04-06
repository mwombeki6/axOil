import { useState } from "react";
import { View, Alert, Text, TouchableOpacity,  } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import StationLayout from "@/components/station/StationLayout";
import { FuelType } from "@/types/FuelType";
import { COLORS } from "@/constants/theme";
import { Station } from "@/types/Station";

export default function StationScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  // Safely parse the station object from params
  const parseStation = (): Station | null => {
    try {
      if (params.station && typeof params.station === 'string') {
        return JSON.parse(params.station) as Station;
      }
    } catch (error) {
      console.error("Failed to parse station data:", error);
    }
    return null;
  };

  const station = parseStation();

  const [fuelTypes] = useState<FuelType[]>([
    { 
      id: '1', 
      type: 'Regular', 
      price: 3.45, 
      icon: 'gas-station',
      color: COLORS.primary
    },
    { 
      id: '2', 
      type: 'Premium', 
      price: 3.89, 
      icon: 'gas-station',
      color: COLORS.warning
    },
    { 
      id: '3', 
      type: 'Diesel', 
      price: 3.25, 
      icon: 'fuel',
      color: COLORS.dark
    },
  ]);

  const [selectedFuelType, setSelectedFuelType] = useState<FuelType>(fuelTypes[0]);
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleContinue = () => {
    // Validate station exists
    if (!station) {
      Alert.alert("Error", "Station information is missing");
      return;
    }

    // Validate inputs
    if (!amount && !quantity) {
      Alert.alert(
        "Missing Information",
        "Please enter either amount or quantity",
        [{ text: "OK" }]
      );
      return;
    }

    const amountValue = amount ? parseFloat(amount) : 0;
    const quantityValue = quantity ? parseFloat(quantity) : 0;

    if (isNaN(amountValue)) {
      Alert.alert(
        "Invalid Amount",
        "Please enter a valid dollar amount",
        [{ text: "OK" }]
      );
      return;
    }

    if (isNaN(quantityValue)) {
      Alert.alert(
        "Invalid Quantity",
        "Please enter a valid quantity in liters",
        [{ text: "OK" }]
      );
      return;
    }

    // Prepare navigation data
    const navigationData = {
      station: JSON.stringify(station),
      selectedFuel: JSON.stringify({
        ...selectedFuelType,
        amount: amountValue,
        quantity: quantityValue,
        total: amountValue || (quantityValue * selectedFuelType.price),
        timestamp: new Date().toISOString()
      })
    };

    try {
      // Navigate back with data
      router.push({
        pathname: "..",
        params: navigationData
      });
    } catch (error) {
      console.error("Navigation error:", error);
      Alert.alert(
        "Error",
        "Failed to proceed to payment",
        [{ text: "OK" }]
      );
    }
  };

  // Handle missing station data
  if (!station) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg">Station information not available</Text>
        <TouchableOpacity 
          onPress={() => router.back()}
          className="mt-4 px-4 py-2 bg-blue-500 rounded-lg"
        >
          <Text className="text-white">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <StationLayout
      station={station}
      fuelTypes={fuelTypes}
      selectedFuelType={selectedFuelType}
      onSelectFuelType={setSelectedFuelType}
      amount={amount}
      onAmountChange={setAmount}
      quantity={quantity}
      onQuantityChange={setQuantity}
      onContinue={handleContinue}
    />
  );
}