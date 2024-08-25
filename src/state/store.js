// import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
// import { thunk } from "redux-thunk";
// import { authReducer } from "./Auth/Reducer";
import {configureStore} from '@reduxjs/toolkit'
import authReducer from "./Auth/slices/authSlice.js"
import customerproductReducer from "./product/customerproductSlice.js"
import cartReducer from './Cart/cartSlice.js'
import orderReducer from './Order/orderSlice.js'

// const rootReducers = combineReducers({
  // auth: authReducer,
// });

// export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));

export default configureStore({
  reducer:{
    auth:authReducer,
    product:customerproductReducer,
    cart:cartReducer,
    order:orderReducer,
  }
})
