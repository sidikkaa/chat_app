import React,{useContext} from 'react'
import { Button } from 'flowbite-react';
import {signOut} from "firebase/auth"
import { auth } from '../firebase';
import "./index.css";
import {AuthContext} from "../context/AuthContext"

const Navbar=()=>{
    const {currentUser}=useContext(AuthContext)
    console.log("currentUser:", currentUser);
    return(    
        <div className='navbar'>
            <span className="logo">Letz chat</span>
            <div className="User">
            <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
            <div className="flex flex-wrap gap-2 ">
            <Button onClick={()=>signOut(auth)} size="xs" outline gradientDuoTone="tealToLime">
        Logout
      </Button>
      </div>
        </div>
        </div>
    )
}
export default Navbar