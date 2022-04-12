import React from 'react'
import './Orders.css'
import {useState, useEffect} from 'react';
import {useStateValue} from './StateProvider';
import {db} from './Firebase.js';
import Order from './Order'
function Orders() {
    const [{basket, user}, dispatch]=useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user){
    db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapShot =>(
            setOrders(snapShot.docs.map(doc=>({
                id: doc.id,
                data: doc.data()
            })))
        ))
    }
    else{
        setOrders([]);
    }
       
    },[user])
  return (
    <div className="orders">
        <div className="orders_order">
            {orders?.map(order=>(
                <Order order={order} />
            ))}
        </div>
    </div>
  )
}

export default Orders