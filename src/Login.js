import React from 'react';
import './Login.css';
import{Link, useHistory} from 'react-router-dom';
import {useState} from 'react';
import { auth } from './Firebase.js';
function Login() {
    const history=useHistory();
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState(''); 

    const signIn=(e)=>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth=>{
              this.context.history.push('/')
             
            })
            .catch(err=>{
              alert(err.message);
            })
        //some fancy firebase login

    }
    const register=(e)=>{
         
            e.preventDefault();

            auth
              .createUserWithEmailAndPassword(email, password)
              .then((auth)=>{
                this.context.history.push('/')
                // <Link to="/" />
              })

  };
    
  return (
    <div className="login">
    <Link to='/'>
        <img className="login_logo"
         src="https://pngimg.com/uploads/amazon/amazon_PNG21.png" alt="logo" />
    </Link>

    <div className="login_container">
        <h1>Signin</h1>
        <form>
            <h5>Email</h5>
            <input type="email" className="" value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <h5>password</h5>
            <input type="password" className="" value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button type="submit" className="login_signInButton" onClick={signIn}
            >Sign in</button>
        </form>
        <p>
            By signin in you are agreeying to <br></br>
            the amazon terms and conditions
        </p>
        <button type="submit" onClick={register} className="login_registerButton">
            Create your amazon account
        </button>
    </div>
    </div>
  )
}

export default Login