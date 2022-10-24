import { GoogleOutlined } from "@ant-design/icons";
import React from "react";
import {auth} from './firebase'

import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

const googleSignin = () =>{

    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
}


const Login = () => {
return(
    <div id="login-page">
        <div id="login-card">
            <h2>This is Fake message</h2>
            <div className="GoogleBtn" onClick={googleSignin()}><GoogleOutlined></GoogleOutlined></div>
            <br></br>
        </div>
    </div>
)}
export default Login;


//note 
// () => signInWithRedirect(new firebase.auth.GoogleAuthProvider())