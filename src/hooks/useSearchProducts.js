import React, { useEffect, useState } from 'react'

export default function useSearchProducts(query) {
    const [products,setProduct]=useState([])
     
    useEffect(()=>{
        if(!query) return;

        async function FetchSearch() {
           const res=await fetch(`https://dummyjson.com/products/search?q=${query}`)  
           const data=await res.json()
           setProduct(data.products)
        }
    FetchSearch()
    },[query])



  return {products}
}

