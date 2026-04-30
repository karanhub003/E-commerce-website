import React from 'react'
import AddToCartBtn from './AddToCartBtn'

export default function () {
  return (
    <>
    <div className='productDetailContainer'>
      <div className="imgBox">
        <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="" />
      </div>
      <div className="detailInfo">
      <h2>Essence Mascara Lash Princess</h2>
      <p>The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.</p>
      <div className="priceTag">
        <p>$199</p>
      </div>
      <AddToCartBtn/>
      </div>
    </div>
    <div className="detailReviewContainer">

    </div>
    </>
  )
}
