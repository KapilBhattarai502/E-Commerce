import { createSlice } from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:'Cart',
    initialState:0,
    reducers:{
        cartCountIncrement:(state,action)=>{
         
            return state+1;



        }
    }
})
export const { cartCountIncrement } = cartSlice.actions

export default cartSlice.reducer
