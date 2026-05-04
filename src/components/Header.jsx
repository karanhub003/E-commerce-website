import React, { useState } from "react";
import logoImg from "../assets/logo.png";
import menuIcon from "../assets/menu.png";
import cartIcon from "../assets/shopping-cart.png";
import "./Header.css";
import SearchBar from "./SearchBar";
import CategoryBox from "./CategoryBox";

export default function Header({ query, setQuery, inputValue, setInputValue }) {
  const [showCategory, setShowCategory] = useState(false);
  return (
    <header>
      <div className="navBar">
        <div className="logoBox">
          <img className="logoImg" src={logoImg} alt="Logo" />
          <p>NEXORA</p>
        </div>
        <SearchBar
          query={query}
          setQuery={setQuery}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <div className="linkContainer">
          <div id="catItem" className="navLinks">
            <p onClick={() => setShowCategory(prev => !prev)}>Category</p>
          </div>
          { showCategory && <CategoryBox/>}
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
