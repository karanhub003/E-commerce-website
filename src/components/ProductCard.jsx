import React from 'react'
import './ProductCard.css'
export default function ProductCard() {
  return (
    <>
    <div className='ProductCard'>
        <div className='priceTag'>
                <p>$199</p>
            </div>
        <div className='imgCard'>
            <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp" alt="zxy item" />   
        </div>
        <div className='productInfo'>
        <h3>Essence Mascara Lash Princess</h3>
        <p>The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.</p>
        <div className='addToCartBtn'>
            <button>Add To Cart</button>
        </div>
        </div>
    </div>
    </>
  )
}
