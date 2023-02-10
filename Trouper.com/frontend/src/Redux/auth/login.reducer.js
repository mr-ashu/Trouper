 
import { json } from 'react-router-dom'
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, SIGN_OUT } from './login.types'

const x = localStorage.getItem("token") 
const u = JSON.parse(localStorage.getItem("user") )||{}
console.log(x)

const initialState = {
  isAuth: !!x,
  user:u,
  token: x,
  loading: false,
  error: false,
}

export const authReducer = (state = initialState, { type, payload }) => {
 
  switch (type) {
    case LOGIN_SUCCESS: {
      localStorage.setItem("token",  payload.token)
      localStorage.setItem("user",  JSON.stringify(payload.user))
      return {
        ...state,
        isAuth: true,
        token:payload.token,
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
     localStorage.removeItem("token")
     localStorage.removeItem("user")
      return {
        ...state,
        isAuth: false,
        loading: false,
        user:"",
        error: false,
        token: ""
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
