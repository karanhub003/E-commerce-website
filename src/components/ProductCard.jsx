import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
export default function ProductCard({product}) {
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
        <div className='addToCartBtn'>
            <button className='ToCartBtn'>Add To Cart</button>
        </div>
        </div>
    </Link>
    
    </>
  )
}
