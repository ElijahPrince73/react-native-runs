import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native'
import { withNavigationFocus } from '@react-navigation/compat';
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import '../_mockLocation'
import useLocation from '../hooks/useLocation' 

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext)
  const [err] = useLocation(isFocused, addLocation)

  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map/>
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  )
}

export default withNavigationFocus(TrackCreateScreen)