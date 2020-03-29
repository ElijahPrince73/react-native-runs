import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignInScreen = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Spacer>
        <Input 
          label="Email" 
          value={email} 
          onChangeText={setEmail} 
          autoCapitalize={false} 
          autoCorrect={false} 
        />
      </Spacer>
      <Spacer>
        <Input 
          label="Password" 
          value={password} 
          onChangeText={setPassword} 
          autoCapitalize={false} 
          autoCorrect={false} 
          secureTextEntry 
        />
      </Spacer>
      <Spacer>
        <Button 
          title="Sign Up" 
          onPress={() => navigate('SignUp')} 
        />
      </Spacer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  }
})

export default SignInScreen