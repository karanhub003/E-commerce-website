import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import AddToCartBtn from './AddToCartBtn'
export default function ProductCard({product}) {

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
        <AddToCartBtn/>
        </div>
    </Link>
    
    </>
  )
}
