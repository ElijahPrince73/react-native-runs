import React from 'react'
import { SafeAreaView } from 'react-native'
import { Text } from 'react-native-elements'
import Map from '../components/Map'

const TrackCreateScreen = () => {
  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map/>
    </SafeAreaView>
  )
}

export default TrackCreateScreen