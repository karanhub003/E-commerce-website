import React from "react";
import logoImg from "../assets/logo.png";
import menuIcon from "../assets/menu.png";
import cartIcon from "../assets/shopping-cart.png";
import './Header.css'
import SearchBar from "./SearchBar";



export default function Header() {
  return (
    <header>
    <div className="navBar">
      <div className="logoBox">
        <img className="logoImg" src={logoImg} alt="Logo" />
        <p>NEXORA</p>
      </div>
      <SearchBar/>
      <div className="linkContainer">
        <div id="otherLink"  className="navLinks">
        <p>Category</p>
      </div>
      <div id="otherLink" className="navLinks">
        <p>Contact Us</p>
      </div>
      <div id="cartBtn" className="navLinks">
        <img src={cartIcon} alt="cart" />
        <p>Cart</p>
      </div>
      <div className="menuIcon">
        <img src={menuIcon} alt="menuIcon" />
      </div>
      </div>
    </div>
    </header>
  );
}
