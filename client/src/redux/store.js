import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducers from "./reducers/productReducers";
import productDetailReducers from "./reducers/productDetailReducers";

const rootReducer = combineReducers({
  product: productReducers,
  productDetail: productDetailReducers,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
