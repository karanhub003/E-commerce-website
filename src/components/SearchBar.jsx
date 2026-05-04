import React from 'react'
import './Header.css'

export default function SearchBar() {
  return (
    <div className="searchContainer">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search Nexora.in"  />
      </div>
  )
}
