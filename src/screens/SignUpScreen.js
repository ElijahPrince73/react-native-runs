import React, { useContext, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
const SignUpScreen = ({ navigation }) => {
  const { state, signUp, clearErrorMessage } = useContext(AuthContext)
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => clearErrorMessage())
    return unsubscribe
  }, [navigation])
  return (
    <View style={styles.container}>
      <AuthForm  
        headerText="Sign Up for Tracker" 
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signUp}
      />
      <NavLink text="Already have an account? Sign in Instead" routeName="SignIn" />
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

export default SignUpScreen