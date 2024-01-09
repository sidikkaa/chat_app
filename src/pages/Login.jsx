import React from "react";
import { Button } from 'flowbite-react';
import { TextInput, Label } from 'flowbite-react';
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./index.css"

const Login = () => {
    const[err,setErr]=useState(false);
    const navigate = useNavigate()
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const email=e.target[0].value;
      const password=e.target[1].value;
  
  try{
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");

   
  }
  catch(err){
  setErr(true);
  }
  
  }

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">Letz chat</span>
                <span className="title">Login</span>
                <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email:" />
                        </div>
                        <TextInput id="email1" type="email" placeholder="trios@gmail.com" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password:" />
                        </div>
                        <TextInput id="password1" type="password" placeholder="enter password" required />
                    </div>


                    <div className="flex justify-center">
                        <Button color="success" type="submit" >
                            Sign in
                        </Button>
                    </div>
                    {err && <span> something went wrong </span>}
                </form>
                <p>you don't have an account?<Link to="/register" className="register-link">Register</Link></p>
            </div>
        </div>
    )
}
export default Login