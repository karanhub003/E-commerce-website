import React, { useState } from "react";
import useProduct from "../hooks/useProduct";
import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";
import Sorting from "./Sorting";

export default function ProductList() {
  const { query,category,setCategory,setQuery,inputValue, setInputValue } = useOutletContext();
  const { products, loading, error } = useProduct(query,category);
  



  const filteredProducts=query?products.filter((p)=>p.title.toLowerCase().includes((query || "").toLowerCase())
  ): products



  if (loading) return <h2 className="errors">Loading...</h2>;
  if (error) return <h2 className="errors">{error}</h2>;
  
  return (
    <>
    <Sorting setCategory={setCategory} query={query}
        setQuery={setQuery} setInputValue={setInputValue}/>
    <div className="ProductsContainer">
      {filteredProducts.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
    </>
  );
}

