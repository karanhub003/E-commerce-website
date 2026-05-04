import React from "react";
import "./Header.css";

export default function SearchBar({
  query,
  inputValue,
  setInputValue,
  setQuery,
}) {
  console.log({ inputValue, setInputValue, setQuery });
  // 🔥 trigger search ONLY on Enter
  return (
    <div className="searchContainer">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search Nexora.in"
        value={inputValue || ""}
        onChange={(e) => {
        const value = e.target.value;
        setInputValue(value)
            if(value===""){
                setQuery("")
            }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setQuery(inputValue || "");
          }
        }}
      />
    </div>
  );
}
