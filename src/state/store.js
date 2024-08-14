// import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
// import { thunk } from "redux-thunk";
// import { authReducer } from "./Auth/Reducer";
import {configureStore} from '@reduxjs/toolkit'
import authReducer from "./Auth/slices/registerSlice.js"

// const rootReducers = combineReducers({
  // auth: authReducer,
// });

// export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));

export default configureStore({
  reducer:{
    auth:authReducer
  }
})
