import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/apiConfig.js";

export const findProduct = createAsyncThunk("find/product", async (reqData) => {
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;

    const { data } =await api.get(
      `/api/products?colors=${colors}&sizes=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
    console.log('data is',data)

    return data;
  
});

export const findProductById = createAsyncThunk(
  "find/productById",
  async (reqData) => {


    
    const { productId } = reqData;
   

   
      const  response  =await api.get(`/api/products/id/${productId}`);
   
      return response.data;
      
    
  }
);
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: null,
    product: null,
    status: null,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(findProduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(findProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error=null,
        state.products=action.payload;
      })
      .addCase(findProduct.rejected, (state, action) => {
        state.status = "failed",
        state.error = action.error.message
      })
      .addCase(findProductById.pending, (state) => {
        state.status = "pending"
      })
      .addCase(findProductById.fulfilled, (state, action) => {
        state.status = "succeeded",
        state.error=null,
        state.product = action.payload;
      })
      .addCase(findProductById.rejected, (state, action) => {
        state.status = "failed", 
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
