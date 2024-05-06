import React, { useEffect, useState } from "react";
import "./Home.css";
import { CgMouse } from "react-icons/cg";
import MetaData from "../Layouts/MetaData";
import { clearError, getProducts } from "../../redux/apiCalling/productApi";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Layouts/Loader/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "./ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError, productCount } = useSelector(
    (state) => state.product
  );
  let productsItem = products.data;
  console.log(productsItem);

  // State to track if error notification has been shown
  const [errorShown, setErrorShown] = useState(false);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch, isError]);

  useEffect(() => {
    // Show error notification only if isError is true and error notification hasn't been shown yet
    if (isError && !errorShown) {
      toast.error(`Error: ${isError}`, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setErrorShown(true); // Update errorShown state
      dispatch(clearError());
    } else if (!isError) {
      // Reset errorShown state if isError becomes false
      setErrorShown(false);
    }
  }, [isError, errorShown, dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="rymoShop - HomePage" />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {productsItem &&
              productsItem.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
