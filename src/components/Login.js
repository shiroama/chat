import { GoogleOutlined } from "@ant-design/icons";
import React from "react";
import {auth} from './firebase'
import { UserAuth } from "../Contexts/AuthContext";

import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const {googleSignin} = UserAuth()
    
    const handleGoogleSignin = async() =>{
        try{
            await googleSignin()
        }catch(err){
            console.log(err);
        }
    }

return(
    <div id="login-page">
        <div id="login-card">
            <h2>This is Fake message</h2>
            <div className="GoogleBtn" onClick={handleGoogleSignin}><GoogleOutlined></GoogleOutlined></div>
            <br></br>
        </div>
    </div>
)}
export default Login;
