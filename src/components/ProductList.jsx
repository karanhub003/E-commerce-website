import React from "react";
import useProduct from "../hooks/useProduct";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { products, loading, error } = useProduct();

  if (loading) return <h2 className="errors">Loading...</h2>;
  if (error) return <h2 className="errors">{error}</h2>;
  
  return (
    <div className="ProductsContainer">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
