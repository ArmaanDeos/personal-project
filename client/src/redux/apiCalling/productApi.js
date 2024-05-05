import {
  clearErrors,
  getAllProductFail,
  getAllProductStart,
  getAllProductSuccess,
} from "../reducers/productReducers";
import { publicRequest } from "../../utilities/requestMethods";
import {
  getProductDetailFail,
  getProductDetailStart,
  getProductDetailSuccess,
} from "../reducers/productDetailReducers";

//* Get Products
export const getProducts = async (dispatch) => {
  dispatch(getAllProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getAllProductSuccess(res.data));
  } catch (error) {
    dispatch(getAllProductFail(error));
  }
};

//* Get Product Details
export const getProductDetails = (id) => async (dispatch) => {
  // Check if id is valid
  if (!id) {
    dispatch(getProductDetailFail("Invalid ID"));
    return;
  }

  dispatch(getProductDetailStart());
  try {
    const res = await publicRequest.get(`/product/${id}`);
    console.log(res);

    // Check if response contains data property
    if (res.data && res.data.data) {
      dispatch(getProductDetailSuccess(res.data.data));
    } else {
      dispatch(getProductDetailFail("Invalid response format"));
    }
  } catch (error) {
    dispatch(getProductDetailFail(error));
  }
};

//* Clear Errors
export const clearError = async (dispatch) => {
  dispatch(clearErrors());
};
