import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    default:
      return state
  }
}

const signUp = (dispatch) => {
  return async ({ email, password }) => {
    try {
      console.log(email, password)
      const { data } = await trackerApi.post('/signup', { email, password })
      console.log(data)   
    } catch (error) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
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
  { isSignedIn: false, errorMessage: '' }
)