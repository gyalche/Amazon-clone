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
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise=loadStripe(
    "pk_test_51KmM5mSI1wL8D1I0lBTaIl86uJrp3MsqRShjQqOsgupaqTg7i4bUwGHAgD53yu9AoFyxO2SjlK9ldiI8SGPT2Ar400Ha2bwm9g"

    );
function Body() {
const [{}, dispatch] =useStateValue();
  useEffect(() => {
    return () => {
      //only run once when the app component is loaded
      auth
          .onAuthStateChanged(authUser =>{
            console.log("the user is", authUser);
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
  }, [])
  return (
      <div className="main_body">
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />} >
          
        </Route>
      <Route path="/login" element={<Login />} />
      <Route path='/payment' element={<Payment />} Elements stripe={promise} /> 
        
    </Routes>
   
   
    </div>
  )
}

export default Body