import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Checkout from './Checkout'
import Home from './Home'
import './Body.css';
import Login from './Login';
import Header from './Header';

import { useEffect } from 'react';
import {auth} from './Firebase.js';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
function Body() {
const [{}, dispatch] =useStateValue();
  useEffect(() => {
    return () => {
      //only run once when the app component is loaded
      auth
          .onAuthStateChanged(authUser =>{
            console.log("the use is", authUser);
          })

          if(authUser){
            // the user is logged in or the user was logged in

            dispatch({
              type:'SET_USER',
              user: authUser
            })
          }
          else{
            // the use is logged out
            dispatch({ type:'SET_USER', user:null })
          }
    };
  }, [input])
  return (
      <div className="main_body">
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />} >
          
        </Route>
      <Route path="/login" element={<Login />} />
      <Route path='/payment' element={<Payment />} />   
    </Routes>
   
   
    </div>
  )
}

export default Body