import { View, Text } from 'react-native'
import React from 'react'
import { UsernameInputScreen } from '@/components/auth/User'

export default function user() {
  return (
   <UsernameInputScreen onSubmit={function (username: string): void {
          throw new Error('Function not implemented.')
      } }/>
  )
}
  