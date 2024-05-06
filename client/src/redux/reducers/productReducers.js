// createSlice is a utility function provided by Redux Toolkit that simplifies the process of creating Redux slices. A Redux slice represents a piece of the Redux state along with the actions and reducers that operate on that state.
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: false,
    isError: false,
    productCount: 0,
  },
  reducers: {
    getAllProductStart: (state) => {
      state.isLoading = true;
      state.isError = false;
    },

    getAllProductSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.products = action.payload;
      state.productCount = action.payload.message;
      state.resultPerPage = action.payload.data.length;
    },

    getAllProductFail: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },

    clearErrors: (state) => {
      state.isError = false;
    },
  },
});

export const {
  getAllProductStart,
  getAllProductSuccess,
  getAllProductFail,
  clearErrors,
} = productSlice.actions;

export default productSlice.reducer;
