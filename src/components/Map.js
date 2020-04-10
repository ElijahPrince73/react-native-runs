import React, { useContext } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context } from '../context/LocationContext'

const Map = () => {
  const { state: { currentLocation, locations } } = useContext(Context)

  if(!currentLocation) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }

  return (
    <MapView 
      style={styles.map} 
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
      <Circle 
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300
  }
})

export default Map