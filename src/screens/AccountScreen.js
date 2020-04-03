import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext)

  return (
    <View style={{ marginTop: 100 }}>
      <Text>Account Screen</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  )
}

export default AccountScreen