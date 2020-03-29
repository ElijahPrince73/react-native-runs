import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'sign_up':
      return { errorMessage: '', token: action.payload }
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    default:
      return state
  }
}

const signUp = (dispatch) => async ({ email, password }) => {
  try {
    const { data } = await trackerApi.post('/signup', { email, password })
    await AsyncStorage.setItem('token', data.token)
    
    dispatch({ type: 'sign_up', payload: data.token })
  } catch (error) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
  }
}

const signIn = (dispatch) => {
  return ({ email, password }) => {
    
  }
}

const signOut = (dispatch) => {
  return () => {
    
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  {signUp, signIn, signOut},
  { token: null, errorMessage: '' }
)