import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  clearError,
  getProductDetails,
} from "../../redux/apiCalling/productApi";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard";
import Loader from "../Layouts/Loader/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  // console.log(id);
  const { product, isLoading, isError } = useSelector(
    (state) => state.productDetail
  );
  // console.log(product);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    variableWidth: true,
  };

  const options = {
    edit: false,
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings || 1,
    isHalf: true,
  };

  // State to track if error notification has been shown
  const [errorShown, setErrorShown] = useState(false);

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
          <div className="ProductDetails">
            <div>
              <Slider {...settings}>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      src={item.url}
                      key={item.url}
                      alt={`${i} Slide`}
                      style={{ width: "20vw" }}
                    />
                  ))}
              </Slider>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <ReactStars {...options} />{" "}
                <span>({product.numOfReviews})</span>
              </div>
              <div className="detailsBlock-3">
                <h1>₹{product.price}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button>-</button>
                    <input readOnly type="number" value="1" />
                    <button>+</button>
                  </div>
                  <button>Add to Cart</button>
                </div>
                <p>
                  Status:{" "}
                  <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                  </b>
                </p>
              </div>
              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>
              <button className="submitReview">Submit Review</button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard review={review} key={review._id} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetail;
