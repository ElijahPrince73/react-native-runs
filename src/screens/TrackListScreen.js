import React from 'react'
import { View, Text, Button } from 'react-native'

const TrackListScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button title="Track Detail" onPress={() => navigate('TrackDetail')}/>
    </View>
  )
}

export default TrackListScreen