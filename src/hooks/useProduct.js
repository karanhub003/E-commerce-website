import React, { useEffect, useState } from 'react'

export default function useProduct(query,category) {
    const [products,setProducts]=useState([])
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState(null)

    useEffect(()=>{
  async function fetchProducts(){
    setLoading(true)

    let url="";
       
    if(query){
            url=`https://dummyjson.com/products/search?q=${query}`
        }else if(category){
            url=`https://dummyjson.com/products/category/${category}`
        }else{
            url=`https://dummyjson.com/products?limit=100`
        }

       try{
                const res=await fetch(url)
                const data=await res.json()
                setProducts(data.products)
                
                setLoading(false)
            } catch(err){
                setError("Something Went Wrong")
                setLoading(false)
            }
        }
        fetchProducts()
        
    },[query,category])
    
  return {products,loading,error}
    
  
}
