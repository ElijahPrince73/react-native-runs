import { useState, useEffect } from 'react'
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location'

export default (shouldTrack, callBack) => {
  const [err, setErr] = useState(null)  
  const [subscriber, setSubsciber] = useState(null)

  const startWatching = async () => {
    try {
      const { status } = await requestPermissionsAsync();
      if (status === 'granted') {
        const sub =  await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        }, (location) => {
          callBack(location)
        })
        setSubsciber(sub)
      } else {
          throw new Error('Location permission not granted')
      }
    } catch (e) {
      setErr(e)
    }
  }

  useEffect(() => {
    if(shouldTrack) {
      startWatching()
    } else {
      subscriber.remove()
      setSubsciber(null)
    }
  }, [shouldTrack])

  return [err]
}