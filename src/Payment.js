import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './checkoutProduct';
import {Link} from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise=loadStripe(
    "pk_test_51KmM5mSI1wL8D1I0lBTaIl86uJrp3MsqRShjQqOsgupaqTg7i4bUwGHAgD53yu9AoFyxO2SjlK9ldiI8SGPT2Ar400Ha2bwm9g";

    )
function Payment() {

    const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>
                Checkout(<Link to='/checkout'>{basket?.length} items)</Link>)
            </h1>
            {/* payment section - deliery address */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user.email}</p>
                        <p>React lane haha</p>
                        <p>Gokarna</p>
                    </div>
                </div>
            {/* payment section - Review items */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item=>{
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        })}
                    </div>
                </div>


            {/* payment section - Payment method */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                        {/*  strip magic will go here */}
                        
                    </div>
                </div>


        </div>

    </div>
  )
}

export default Payment
