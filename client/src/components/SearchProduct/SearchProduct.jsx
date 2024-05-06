import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory hook
import "./SearchProduct.css";

const SearchProduct = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  return (
    <>
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a product..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">Search</button>{" "}
      </form>
    </>
  );
};

export default SearchProduct;
