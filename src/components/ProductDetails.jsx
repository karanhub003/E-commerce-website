import React, { useEffect, useState } from 'react'
import AddToCartBtn from './AddToCartBtn'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'

export default function () {

const {id}=useParams();
const[product,setProduct]=useState(null)

useEffect(()=>{
  async function fetchProduct() {
    const res= await fetch(`https://dummyjson.com/products/${id}`)
    const data=await res.json()
    setProduct(data)

  }
  fetchProduct()
},[id])
if (!product) {
  return <p>Loading...</p>;
}

console.log(product);
return (
    <>
    <div className='productDetailContainer'>
      <div className="imgBox">
        <img src={product.images[0]} alt="" />
      </div>
      <div className="detailInfo">
      <div className="nameDes">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      </div>
      <div className="priceBox">
        <p>${product.price}</p>
      </div>
      <AddToCartBtn/>
      </div>
    </div>   
    <div className="detailReviewContainer">{
      product.reviews.map((review,i)=>(
    <div className="reviewBox" key={i}>
      <div className="reviewInfo">
        <h3>{review.
reviewerName}</h3>
        <p>{review.
reviewerEmail}</p>
      </div>
      <div className="commentRate">
        <p>{review.comment}</p>
        <p>{review.rating}/5</p>
      </div>
      <p>2025-04-30T09:41:02.053Z</p>
    </div>
      )
        
      )
      
      }
    
    
    </div>
    </>
  )
}
