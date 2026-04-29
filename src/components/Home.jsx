import React from 'react'
import Header from './Header'
import ProductCard from './ProductCard'

export default function Home() {
  return (
    <>
    <header>
        <Header/>
    </header>
    <main>
      <div className='ProductsContainer'>
        <ProductCard/>
      </div>
    </main>
    </>
  )
}
