import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'

const TrackForm = () => {
  const { state: {
    name, recording, locations
  }, 
    startRecording,
    stopRecording,
    changeName 
  } = useContext(LocationContext)

  console.log(locations.length)

  return (
    <>
      <Spacer>
        <Input placeholder="Enter name" onChangeText={changeName} value={name} />
      </Spacer>
      
      { recording 
        ? <Button title="Stop" onPress={stopRecording} /> 
        : <Button title="Start recording" onPress={startRecording} /> 
      }
    </>
  )
}

export default TrackForm