import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import logo from "../../../images/shop-logo.png";
import { ReactNavbar } from "overlay-navbar";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

// Overlay Navbar Options --
const options = {
  burgerColor: "#eb4034",
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "0px",
  logoHoverColor: "#fff",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Size: "1.5vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};
const Header = () => {
  return (
    <Router>
      <ReactNavbar
        {...options}
        searchIcon={true}
        SearchIconElement={FaSearch}
        searchIconUrl="/search"
        profileIcon={true}
        ProfileIconElement={FaUserPlus}
        cartIcon={true}
        CartIconElement={FiShoppingBag}
        link1Url="/"
        link2Url="/products"
        link3Url="/contact"
        link4Url="/about"
      />
    </Router>
  );
};

export default Header;
