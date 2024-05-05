import { createSlice } from "@reduxjs/toolkit";

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    product: {},
    isLoading: false,
    isError: false,
  },
  reducers: {
    getProductDetailStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    getProductDetailSuccess: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.isError = false;
    },
    getProductDetailFail: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    clearErrors: (state) => {
      state.isError = false;
    },
  },
});

export const {
  getProductDetailStart,
  getProductDetailSuccess,
  getProductDetailFail,
} = productDetailSlice.actions;

export default productDetailSlice.reducer;
