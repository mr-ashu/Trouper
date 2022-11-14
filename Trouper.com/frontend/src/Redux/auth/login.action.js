 import axios from "axios";
 import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./login.types";
 
 export const login = (data) => async (dispatch) => {
   dispatch({ type: LOGIN_LOADING });
   try {
     let response = await axios.post(`http://localhost:9500/users/login`, data);
     dispatch({ type: LOGIN_SUCCESS, payload: response.data });
   } catch (error) {
     dispatch({ type: LOGIN_ERROR });
   }
 };
 
 


//  http://localhost:9500/users/signup
//  http://localhost:9500/users/login
