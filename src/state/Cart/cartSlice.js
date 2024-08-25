import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/apiConfig";

export const getCart = createAsyncThunk("get/Cart", async () => {
  const { data } = await api.get("/api/cart/");
  return data;
});

export const addItemToCart = createAsyncThunk("add/ItemToCart", async (reqData) => {
  const { data } = await api.put("/api/cart/add", reqData.data);
  return data;
});

export const removeCartItem = createAsyncThunk("remove/Item", async (reqData) => {
  const { data } = await api.delete(`/api/cart_items/${reqData.cartItemId}`);
  return data;
});

export const updateCartItem = createAsyncThunk("update/Item", async (reqData) => {
  const { data } = await api.put(
    `/api/cart_items/${reqData.cartItemId}`,
    reqData.data
  );
  return data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: null,
    cartItems: [],
    status: null,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addItemToCart.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems.push(action.payload);
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.error.message);
      })
      .addCase(getCart.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getCart.fulfilled, (state, action) => {
        (state.status = "succeeded"),
          (state.error = null),
          (state.cart = action.payload),
          (state.cartItems = action.payload.cartItems);
      })
      .addCase(getCart.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.error.message);
      })
      .addCase(removeCartItem.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = state.cartItems.filter((item) => {
          item.id !== action.payload;
        });
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.error.message);
      })
      .addCase(updateCartItem.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = state.cartItems.map((item) => {
          item.id === action.payload.id ? action.payload : item;
        });
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.status = "failed",
        state.error = action.error.message
      })
  },
});

export default cartSlice.reducer;
