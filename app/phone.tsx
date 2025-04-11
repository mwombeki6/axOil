import { View, Text } from 'react-native'
import React from 'react'
import { PhoneInputScreen } from '@/components/auth/PhoneOtp'

export default function phone() {
  return (
   <PhoneInputScreen onSubmit={function (phoneNumber: string): void {
          throw new Error('Function not implemented.')
      } }/>
  )
}