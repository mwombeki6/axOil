import { View, Text } from 'react-native'
import React from 'react'
import { OTPVerificationScreen } from '@/components/auth/OtpVerification'

export default function otp() {
  return (
    <OTPVerificationScreen phoneNumber={''} onVerify={function (otp: string): void {
          throw new Error('Function not implemented.')
      } } onResendCode={function (): void {
          throw new Error('Function not implemented.')
      } } onChangeNumber={function (): void {
          throw new Error('Function not implemented.')
      } }/>
  )
}
  