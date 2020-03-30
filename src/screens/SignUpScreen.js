import React, { useState, useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const SignUpScreen = ({ navigation: { navigate } }) => {
  const { state, signUp } = useContext(AuthContext)
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
          autoCapitalize="none" 
          autoCorrect={false} 
        />
      </Spacer>
      <Spacer>
        <Input 
          label="Password" 
          value={password} 
          onChangeText={setPassword} 
          autoCapitalize="none" 
          autoCorrect={false} 
          secureTextEntry 
        />
      </Spacer>
      { state.errorMessage ? (
        <Spacer>
          <Text style={styles.errorMessage}>{state.errorMessage}</Text>
        </Spacer>
      ) : null }
      <Spacer>
        <Button 
          title="Sign Up" 
          onPress={() => signUp({ email, password })} 
        />
      </Spacer>
      <Spacer>
        <TouchableOpacity onPress={() => navigate('SignIn')}>
          <Text style={styles.link }>Already have an account? Sign in instead</Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
  },
  link: {
    color: 'blue'
  }
})

export default SignUpScreen