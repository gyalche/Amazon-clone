import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Checkout from './Checkout'
import Home from './Home'
import './Body.css'
import Login from './Login'
function Body() {
  return (
      <div className="main_body">
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />} ></Route>
      <Route path="/login" element={<Login />} />

        
    </Routes>
   
   
    </div>
  )
}

export default Body