import React, { useEffect, useContext } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { ListItem, Text } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext)
  useEffect(() => {
    const unsub = navigation.addListener('focus', () => fetchTracks())
    return unsub
  }, [navigation])

  return (
    <>
      <Text h3>TrackListScreen</Text>
      <FlatList 
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity 
              onPress={() => 
                navigation.navigate('TrackDetail', { _id: item._id })
              }
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          )
        }}
      />
    </>
  )
}

export default TrackListScreen