import React, { useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './checkoutProduct';
import {Link} from 'react-router-dom';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer';
import axios from './axios';
import {db} from './firebase.js';
// import {loadStripe} from '@stripe/stripe-js';
// import {Elements} from '@stripe/react-stripe-js';

// const promise=loadStripe(
//     "pk_test_51KmM5mSI1wL8D1I0lBTaIl86uJrp3MsqRShjQqOsgupaqTg7i4bUwGHAgD53yu9AoFyxO2SjlK9ldiI8SGPT2Ar400Ha2bwm9g"

//     );
function Payment() {


    const [{basket, user}, dispatch] = useStateValue();
    const [error, setError]=useState();
    const [disabled, setDiabled]=useState();
    const [processing, setProcessing]=useState();
    const [succeeded, setSucceeded]=useState();
    const [clientSecret, setClientSecret]=useState();
    const stripe=useStripe();
    const elements=useElements();

    useEffect(()=>{
        //generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async ()=>{
            const response=await axios({
                method:'post',
                //stripe expects the total in a currencies sub-unit
                url:`payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])
    const handleSubmit = async(e)=>{
        //do all the fancy stripe here
        e.preventDefault();
        setProcessing(true);
        
        const payload=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            
            //paymentIntent = paymentConformation
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket:basket,
                amount:paymentIntent.amount,
                created:paymentIntent.created
            })
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })


    }

    const handleChange=(e)=>{
        e.preventDefault();
        //listen for changes in the CardElemnts
        //and display any errors as the customer types their card details
        setDiabled(e.empty);
        setError(e.error? e.error.message: "");
    }

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
                        
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment_priceContainer'>
                                <CurrencyFormat
                                    renderText={(value)=>(

                                        <>
                                            <h3>Order Total:(value)</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayText={"text"}
                                    thousandSeperator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                        <span>
                                            {processing? <p>processing</p>:"Buy now"}
                                        </span>
                                </button>
                            </div>
                            
                            {error && <div>{error}</div>}
                        </form>
                        
                    </div>
                </div>


        </div>

    </div>
  )
}

export default Payment
