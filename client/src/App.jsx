import React from "react";
import Header from "./components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Products from "./components/Products/Products";
import SearchProduct from "./components/SearchProduct/SearchProduct";

const App = () => {
  // React.useEffect(() => {
  //   Webfont.load({
  //     google: {
  //       families: ["Montserrat", "Droid Sans", "Chilanka"],
  //     },
  //   });
  // }, []);
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route path="/search" element={<SearchProduct />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
