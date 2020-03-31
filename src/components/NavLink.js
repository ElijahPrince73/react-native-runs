import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Spacer from './Spacer'
import { withNavigation } from '@react-navigation/compat'

const NavLink = ({ navigation: { navigate }, text, routeName}) => {

  return (
    <Spacer>
      <TouchableOpacity onPress={() => navigate(routeName)}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    </Spacer>
  )
}

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  }
})

export default withNavigation(NavLink)