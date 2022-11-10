 
import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux"
 
 import thunk from "redux-thunk"
import { authReducer } from "./auth/login.reducer"
 

 

const rootReducer=combineReducers({
 auth:authReducer
})
 


export const store =legacy_createStore(rootReducer, applyMiddleware(thunk))




 
