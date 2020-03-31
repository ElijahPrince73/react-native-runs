import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'sign_in':
      return { errorMessage: '', token: action.payload }
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'clear_error_message': 
      return { ...state, errorMessage: '' }
    default:
      return state
  }
}

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' })
}

const signUp = (dispatch) => async ({ email, password }) => {
  try {
    const { data } = await trackerApi.post('/signup', { email, password })
    await AsyncStorage.setItem('token', data.token)
    
    dispatch({ type: 'sign_in', payload: data.token })
  } catch (error) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
  }
}

const signIn = (dispatch) => async ({ email, password }) => {
  try {
    const { data } = await trackerApi.post('/signin', { email, password })
    await AsyncStorage.setItem('token', data.token)
    
    dispatch({ type: 'sign_in', payload: data.token })
  } catch (error) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' })
  }
}

const signOut = (dispatch) => {
  return () => {
    
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut, clearErrorMessage },
  { token: null, errorMessage: '' }
)