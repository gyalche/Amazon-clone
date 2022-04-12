const functions = require("firebase-functions");

const express = require("express");
const cors=require("cors");
const stripe = require("stripe")('sk_test_51KmM5mSI1wL8D1I0upgr1EcHMPSDZ0mSOPkNLIqvuVSM4TIK9zkDyN2gyz6eCxaPojSbRBx4984xpdsdlmK2vGbo00VsoU9qbd');

//app configure
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin:true}));

//api route
app.get('/', (req, res)=>{
    res.status(200).send('hellow world')
})
app.post('/payments/create', async(req, res)=>{
    const total = request.query.total;
    console.log("request received", total);

    const paymentIntent = await stripe.paymentIntent.create({
        amount:total, // this is in submits of the currency
        currency:'usd'
    })

    //okey created
    response.status(201).send({
        clientSecret : paymentIntent.client_secret,
    })
})


//listener
//this is a api neede to run backend express in cloud function
exports.api=functions.https.onRequest(app)

//Example endpoint
//http://localhost:5001/clone-f4eb9/us-central1/api
