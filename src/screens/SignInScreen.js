import React, { useContext, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignUpScreen = ({ navigation }) => {
  const { state, signIn, clearErrorMessage } = useContext(AuthContext)
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => clearErrorMessage())
    return unsubscribe
  }, [navigation])

  return (
    <View style={styles.container}>
      <AuthForm  
        headerText="Sign In" 
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signIn}
      />
      <NavLink text="Don't have an account? Sign up instead" routeName="SignUp" />
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