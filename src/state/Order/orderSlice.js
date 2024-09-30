import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/apiConfig";

export const createOrder=createAsyncThunk('create/order',async(reqData)=>{
    const {data}= await api.post(`/api/orders/`,reqData.address)

    if(data._id){
        reqData.navigate({search:`step=3&order_id=${data._id}`});
    }
    return data
})

export const getOrderById=createAsyncThunk('get/order/ById',async(orderId)=>{

    const {data}=await api.get(`/api/orders/${orderId}`);
    return data;


})



const orderSlice = createSlice({
    name: "order",
    initialState: {
     orders:[],
     order:null,
     error:null,
     status:null,
    },
    reducers: {},
  
    extraReducers: (builder) => {
      builder
        .addCase(createOrder.pending, (state) => {
          state.status = "pending";
        })
        .addCase(createOrder.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.error=null,
          state.order=action.payload;
        })
        .addCase(createOrder.rejected, (state, action) => {
          state.status = "failed",
          state.error = action.error.message
        })
        .addCase(getOrderById.pending, (state) => {
          state.status = "pending"
        })
        .addCase(getOrderById.fulfilled, (state, action) => {
          state.status = "succeeded",
          state.error=null,
          state.order=action.payload;
        })
        .addCase(getOrderById.rejected, (state, action) => {
          state.status = "failed", 
          state.error = action.error.message;
        });
    },
  });

  export default orderSlice.reducer;