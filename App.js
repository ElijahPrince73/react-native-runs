import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from './src/screens/AccountScreen'
import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'

const AuthStack = createStackNavigator()

const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
  </AuthStack.Navigator>
)

const TrackListStack = createStackNavigator()

const TrackListScreens = () => (
  <TrackListStack.Navigator>
    <TrackListStack.Screen name="TrackList" component={TrackListScreen} />
    <TrackListStack.Screen name="TrackDetail" component={TrackDetailScreen} />
  </TrackListStack.Navigator>
)

const AppStack = createBottomTabNavigator()

const AppStackScreen = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="TrackList" component={TrackListScreens}/>
    <AppStack.Screen name="TrackCreate" component={TrackCreateScreen}/>
    <AppStack.Screen name="Account" component={AccountScreen}/>
  </AppStack.Navigator>
)

export default () => {
  const userToken = null
  console.log(userToken)
  return (
    <NavigationContainer>
      {userToken === null ? (
          <AuthStackScreen />
        ) : (
          <AppStackScreen />
        )
      }
    </NavigationContainer>
  )
}