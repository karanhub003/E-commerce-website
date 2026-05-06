import React, { useEffect } from 'react'
import './ProductCard.css'
import { Link, useNavigate } from 'react-router-dom'
import AddToCartBtn from './AddToCartBtn'
import { useCart } from '../context/CartContext'
export default function ProductCard({product}) {
  const {addToCart}=useCart()
  const handleAddToCart = (e) => {
  e.preventDefault();
  e.stopPropagation();

  addToCart(product);

  console.log("Added To Cart");
};
  // console.log(product.reviews);
  return (
    <>
    <Link to={`/product/${product.id}`} className='ProductCard'>
        <div className='priceTag'>
                <p>${product.price}</p>
            </div>
        <div className='imgCard'>
            <img src={product.thumbnail} alt="zxy item" />   
        </div>
        <div className='productInfo'>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <AddToCartBtn handleAddToCart={handleAddToCart} />
        </div>
    </Link>
    
    </>
  )
}
