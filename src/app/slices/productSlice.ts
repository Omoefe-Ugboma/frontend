import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../api/productApi";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  return await getProducts();
});

const productSlice = createSlice({
  name: "products",
  initialState: { data: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchProducts.fulfilled, (state, action) => { state.data = action.payload; state.loading = false; });
  }
});

export default productSlice.reducer;
