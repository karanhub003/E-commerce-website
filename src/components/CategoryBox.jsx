import React from 'react'
import './CategoryBox.css'

export default function CategoryBox({setCategory,setQuery,setInputValue, setShowCategory}) {
 

  const categories = [
  "All",
  "Beauty",
  "Fragrances",
  "Furniture",
  "Groceries",
  "Home-Decoration",
  "Kitchen-Accessories",
  "Laptops",
  "Mens-Shirts",
  "Mens-Shoes",
  "Mens-Watches",
  "Mobile-Accessories"
];
  return (
    <div className='categoryBox'>
      {categories.map((cat)=>(
        <p key={cat} onClick={()=>{setCategory(cat==="All"?'':cat)
        setQuery("")
        setInputValue("")
        setShowCategory(false)}}>{cat}</p>
      ))}
    </div>
 )
}

