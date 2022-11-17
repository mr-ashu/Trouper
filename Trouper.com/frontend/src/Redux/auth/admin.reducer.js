import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, SIGN_OUT } from "./admin.type"
 

 
 

const t = localStorage.getItem("t")

const initialState = {
  isAuth: !!t,
  user:"",
  token: t,
  loading: false,
  error: false,
}

export const AdminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      localStorage.setItem("t", payload.t)
      return {
        ...state,
        isAuth: true,
        token: payload.t,
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
      localStorage.removeItem("t")
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
