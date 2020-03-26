import React from 'react'
import { View, Text, Button } from 'react-native'

const SignInScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text>SignInScreen</Text>
      <Button title="SignUp Screen" onPress={() => navigate('SignUp')} />
    </View>
  )
}

export default SignInScreen