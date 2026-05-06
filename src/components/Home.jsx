import React, { useEffect } from 'react'
import Header from './Header'
import ProductList from './ProductList'
import { useCart } from '../context/CartContext'



export default function Home() {
  return (
    <>
      <ProductList/>
    </>
  )
}
