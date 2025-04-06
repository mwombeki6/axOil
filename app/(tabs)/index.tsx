import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
    return (
        <View className="flex-1 justify-center items-center">
            <Text className="text-5xl font-bold text-light-100">Welcome HOME!</Text>
            <Link href={'./onboarding'}>Home</Link>
            <Link href={'./station'}>Station</Link>
            <Link href={'./fuel'}>Fuel</Link>
        </View>
    )   
} 