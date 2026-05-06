import React from 'react'
import './AddToCartBtn.css'

export default function AddToCartBtn({handleAddToCart}) {

   
  return (
    <div className='addToCartBtn'>
            <button className='ToCartBtn' onClick={handleAddToCart}>Add To Cart</button>
        </div>
  )
}
