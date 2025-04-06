import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Link, useNavigation, useRouter } from 'expo-router';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import StationCard from '@/components/StationCard';
import { Station } from '@/types/Station';
import { Transaction } from '@/types/Transaction';

export default function HomeScreen() {
    const navigation = useNavigation();
    const router = useRouter();
    const [nearbyStations, setNearbyStations] = useState<Station[]>([
        {
            id: '1',
            name: 'Shell Station',
            address: '123 Uhuru Street, Temeke',
            distance: 1.2,
            rating: 4.7,
            image: require('@/assets/station1.png'),
        },
        {
            id: '2',
            name: 'BP Gas Station',
            address: '456 CocaCola Road, Iyunga',
            distance: 2.5,
            rating: 4.3,
            image: require('@/assets/station2.png'),
        },
        {
            id: '3',
            name: 'Mobil Fuel Center',
            address: '789 Umoja Road, OysterBay',
            distance: 3.8,
            rating: 4.1,
            image: require('@/assets/station3.png'),
        },
    ]);

    const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([
        {
            id: '1',
            station: 'Shell Station',
            amount: 35.75,
            quantity: 10.5,
            date: '12 Apr, 10:30 AM',
        },
        {
            id: '2',
            station: 'BP Gas Station',
            amount: 28.20,
            quantity: 8.3,
            date: '08 Apr, 2:15 PM',
        },
    ]);

    const handleAddMoney = () => {
        // Implement add money functionality
    };

    const handleViewAllStations = () => {
        navigation.navigate('StationsList');
    };

    const handleViewHistory = () => {
        navigation.navigate('TransactionHistory');
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <StatusBar barStyle="dark-content" />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="px-6 pt-6">
                    {/* Header Section */}
                    <View className="flex-row justify-between items-center mb-6">
                        <View>
                            <Text className="text-gray-500">Good morning,</Text>
                            <Text className="text-2xl font-bold text-gray-800">Rajab</Text>
                        </View>
                        <TouchableOpacity
                            className="p-2 bg-white rounded-full shadow-sm"
                            accessibilityLabel="Notifications"
                        >
                            <Ionicons name="notifications-outline" size={24} color="#1F2937" />
                        </TouchableOpacity>
                    </View>

                    {/* Wallet Balance Card */}
                    <View className="bg-white rounded-3xl p-5 shadow-md mb-6">
                        <View className="flex-row justify-between mb-4">
                            <Text className="text-gray-800 font-semibold text-lg">Wallet Balance</Text>
                            <TouchableOpacity onPress={handleAddMoney}>
                                <Text className="text-blue-500 font-medium">Add Money</Text>
                            </TouchableOpacity>
                        </View>
                        <Text className="text-3xl font-bold text-gray-800 mb-3">Tshs50005.50</Text>
                        <View className="flex-row">
                            <TouchableOpacity
                                className="bg-blue-500 py-2 px-4 rounded-xl flex-row items-center mr-3"
                                onPress={handleAddMoney}
                            >
                                <Feather name="plus" size={18} color="white" style={{ marginRight: 4 }} />
                                <Text className="text-white font-medium">Top Up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                className="bg-gray-100 py-2 px-4 rounded-xl flex-row items-center"
                                onPress={handleViewHistory}
                            >
                                <Feather name="activity" size={18} color="#1F2937" style={{ marginRight: 4 }} />
                                <Text className="text-gray-800 font-medium">History</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Nearby Stations Section */}
                    <View className="mb-6">
                        <View className="flex-row justify-between items-center mb-4">
                            <Text className="text-gray-800 font-semibold text-lg">Nearby Stations</Text>
                            <TouchableOpacity onPress={handleViewAllStations}>
                                <Text className="text-blue-500 font-medium">View All</Text>
                            </TouchableOpacity>
                        </View>

                        {nearbyStations.map((station) => (
                            <StationCard
                                key={station.id}
                                {...station}
                                onPress={() => router.push('/station/[id]',)}
                            />
                        ))}
                    </View>

                    {/* Recent Transactions Section */}
                    <View className="mb-6">
                        <Text className="text-gray-800 font-semibold text-lg mb-4">Recent Transactions</Text>

                        {recentTransactions.map((transaction) => (
                            <TouchableOpacity
                                key={transaction.id}
                                className="bg-white rounded-xl p-4 mb-3 flex-row items-center shadow-sm"
                                onPress={() => navigation.navigate('TransactionDetail', { transaction })}
                            >
                                <View className="bg-blue-50 p-3 rounded-full mr-3">
                                    <MaterialCommunityIcons name="gas-station" size={22} color="#3B82F6" />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-gray-800 font-medium">{transaction.station}</Text>
                                    <Text className="text-gray-500 text-sm">{transaction.date}</Text>
                                </View>
                                <View className="items-end">
                                    <Text className="text-gray-800 font-bold">${transaction.amount.toFixed(2)}</Text>
                                    <Text className="text-gray-500 text-sm">{transaction.quantity}L</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}