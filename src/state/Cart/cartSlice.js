import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/apiConfig";

export const getCart = createAsyncThunk("get/Cart", async () => {
  const  {data}  = await api.get("/api/cart/");
  
  return data;
});

export const addItemToCart = createAsyncThunk("add/ItemToCart", async (reqData) => {

  const  data  = await api.put("/api/cart/add", reqData);

  // return data;
});

export const removeCartItem = createAsyncThunk("remove/Item", async (cartItemId) => {
  const { data } = await api.delete(`/api/cart_items/${cartItemId}`);
  return data;
});

export const updateCartItem = createAsyncThunk("update/Item", async (reqData) => {
  console.log('reqData is',reqData)
 
  const { data } = await api.put(
    `/api/cart_items/${reqData.cartItemId}`,
    reqData.data
  );
  return data;
});
export const clearCart = createAsyncThunk("clear/cart",async()=>{
  return null;
})

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: null,
    cartItems: null,
    status: null,
    error: null,
    updateCartItem:null,
    deleteCartItem:null,
    clearCartItem:null,
    
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addItemToCart.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems=action.payload;
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.error.message);
      })
      .addCase(getCart.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getCart.fulfilled, (state, action) => {
          state.status = "succeeded",
          state.error = null,
          state.cart = action.payload,
          state.cartItems = action.payload.cartItems;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.status = "failed",
        state.error = action.error.message;
      })
      .addCase(removeCartItem.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.deleteCartItem=action.payload
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.error.message);
      })
      .addCase(updateCartItem.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.updateCartItem=action.payload
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.status = "failed",
        state.error = action.error.message
       
      })
      .addCase(clearCart.pending,(state)=>{
        state.status='pending'
      })
      .addCase(clearCart.fulfilled,(state)=>{
        state.status='fulfilled',
        state.cart=null,
        state.cartItems=null,
        state.error=null,
        state.clearCartItem=action.payload;
      })
      .addCase(clearCart.rejected,(state)=>{
        state.status='rejected'
      })
  },
});

export default cartSlice.reducer;
