 
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, SIGN_OUT } from './login.types'

const token = JSON.parse(localStorage.getItem("token"))||{}

const initialState = {
  isAuth: !!token,
  user:token.user,
  token: token,
  loading: false,
  error: false,
}

export const authReducer = (state = initialState, { type, payload }) => {
 console.log(payload)
  switch (type) {
    case LOGIN_SUCCESS: {
      localStorage.setItem("token",  JSON.stringify(payload.token))
      return {
        ...state,
        isAuth: true,
        token: payload,
        user:payload.user,
        loading: false,
        error: false
      }
    }
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }
    case SIGN_OUT: {
    //  localStorage.removeItem("token")
      return {
        ...state,
        isAuth: false,
        loading: false,
        user:"",
        error: false,
        token: null
      }
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loading:false,
        error: true
      }
    }
    default: {
      return state
    }
  }

}
