import React from "react";
import Header from "./components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail/ProductDetail";

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
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
