import React, { useState, useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

const SignUpScreen = ({ navigation: { navigate } }) => {
  const { state, signUp } = useContext(AuthContext)
  
  return (
    <View style={styles.container}>
      <AuthForm  
        headerText="Sign Up for Tracker" 
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signUp}
      />
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