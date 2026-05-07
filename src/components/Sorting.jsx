import React from "react";
import "./Sorting.css";

export default function Sorting({
  setCategory,
  setQuery,
  setInputValue,
}) {
  const categories = [
    "All",
    "Beauty",
    "Fragrances",
    "Furniture",
    "Groceries",
    "Home-Decoration",
    "Kitchen-Accessories",
    "Laptops",
    "Mens-Shirts",
    "Mens-Shoes",
    "Mens-Watches",
    "Mobile-Accessories",
  ];
  return (
    <div className="slideBarContainer">
      <div className="categoriesBox">
        <h2>Categories:</h2>
        <div className="categoriesValue">
          {categories.map((cat) => (
            <p
              key={cat}
              onClick={() => {
                setCategory(cat === "All" ? "" : cat);
                setQuery("");
                setInputValue("");
              }}
            >
              {cat}
            </p>
          ))}
        </div>
        <hr />
        <div className="sortingBox">
          <h2>Sorting:</h2>
          <div className="sortingValue">
            <span>Price:</span>
            <div className="priceVAl">
              <p>High to Low</p>
              <p>Low to High</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
