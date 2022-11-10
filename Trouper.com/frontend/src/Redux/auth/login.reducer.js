
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, SIGN_OUT } from './login.types'

const token = localStorage.getItem("token")

const initialState = {
  isAuth: !!token,
  token: "",
  loading: false,
  error: false,
}

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", payload)
      return {
        ...state,
        isAuth: true,
        token: payload,
        loading: false,
        error: false
      }
    }
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case SIGN_OUT: {
      localStorage.removeItem("token")
      return {
        ...state,
        isAuth: false,
        loading: false,
        error: false,
        token: ""
      }
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        error: true
      }
    }
    default: {
      return state
    }
  }

}
