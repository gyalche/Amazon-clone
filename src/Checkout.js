import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{basket, user}, dispatch]=useStateValue();
  return (
    <div className="checkout">
        <div className="checkout_left">
            <img className="checkout_ad"
            src="https://imgs.search.brave.com/nkZw2rdtdyNM0e9HbkLQ8OaKMpIsnghyjdujjVjHYs0/rs:fit:750:279:1/g:ce/aHR0cDovL3d3dy5u/ZXdidXJ5cG9ydGVm/Lm9yZy93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNi8xMS9hbWF6/b25fc21pbGVfbmV3/YmFubmVyLnBuZw" alt='' />
            <div>
                <h3> Hellow, {user?.email}</h3>
                <h2 className="checkout_title">
                    Your shopping Baket
                </h2>
                
                {basket.map(item=>(
                   
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>
        <div className="checkout_right">
        
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout