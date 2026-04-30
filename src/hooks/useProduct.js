import React, { useEffect, useState } from 'react'

export default function useProduct() {
    const [products,setProducts]=useState([])
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState(null)

    useEffect(()=>{
        async function fetchProducts(){
            try{
                const res=await fetch("https://dummyjson.com/products?limit=100")
                const data=await res.json()
                setProducts(data.products)
                
                setLoading(false)
            } catch(err){
                setError("Something Went Wrong")
                setLoading(false)
            }
        }
        fetchProducts()
        
    },[])
    
  return {products,loading,error}
    
  
}
