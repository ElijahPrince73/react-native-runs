import React, { useEffect, useState, useContext } from 'react'
import { SafeAreaView } from 'react-native'
import { Text } from 'react-native-elements'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import '../_mockLocation'

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext)
  const [err, setErr] = useState(null)

  const startWatching = async () => {
    try {
      const { status } = await requestPermissionsAsync();
      if (status === 'granted') {
        await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        }, (location) => {
          addLocation(location)
        })
      } else {
          throw new Error('Location permission not granted');
      }
    } catch (e) {
      setErr(e)
    }
  }

  useEffect(() => {
    startWatching()
  }, [])

  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map/>
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  )
}

export default TrackCreateScreen