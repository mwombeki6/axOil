import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
    return (
        <View className="flex-1 justify-center items-center">
            <Text className="text-5xl font-bold text-light-100">Activity!</Text>
            <Link href={'../phone'} className='spa space-y-20'>Phone Number Input</Link>
            
            <Link href={'../otp'} className='spa space-x-20'>OTP Entry</Link>
            <Link href={'../user'}>Username</Link>
        </View>
    )   
} 