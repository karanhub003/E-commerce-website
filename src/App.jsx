import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
   return (
   <>
   <Header/>
   <Outlet/>
   </>
  )
}

export default App
