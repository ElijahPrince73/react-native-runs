import React, { useContext } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext)

  return (
    <SafeAreaView>
      <Text>Account Screen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signOut} />
      </Spacer>
    </SafeAreaView>
  )
}

export default AccountScreen