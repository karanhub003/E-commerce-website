import React from "react";
import useProduct from "../hooks/useProduct";
import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";

export default function ProductList() {
  const { query } = useOutletContext();
  const { products, loading, error } = useProduct();


  const filteredProducts=query?products.filter((p)=>p.title.toLowerCase().includes((query || "").toLowerCase())
  ): products



  if (loading) return <h2 className="errors">Loading...</h2>;
  if (error) return <h2 className="errors">{error}</h2>;
  
  return (
    <div className="ProductsContainer">
      {filteredProducts.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
