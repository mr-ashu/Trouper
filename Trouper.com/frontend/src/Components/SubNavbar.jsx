 
import React, { useEffect, useState } from 'react'
 import style from "./navbar.module.css"
import { Link   } from 'react-router-dom';
import ProductPage from '../Page/ProductPage';
import axios from 'axios';


export const SubNavbar = () => {
      const [text,setText]=useState("")
    
 
      const handleclick=(value)=>{
        setText(value)
      }
  
   localStorage.setItem("pdata", text)
 
  return (
    <div> 
   
       <div className={style.subNavbar}>
          <Link onClick={()=>handleclick("graphic & design")} to="/product">Graphics & Design</Link  >
          <Link onClick={()=>handleclick("digital marketing")} to="/product">Digital Marketing</Link  >
          <Link onClick={()=>handleclick("Writing & transition")} to="/product">Writing & Transition</Link  >
          <Link onClick={()=>handleclick("video animation")} to="/product">Video & Animation</Link  >
          <Link onClick={()=>handleclick("Music & audio")} to="/product">Music & Audio</Link >
          <Link onClick={()=>handleclick("programming")} to="/product">Programming & Tech</Link  >
          <Link onClick={()=>handleclick("Business")} to="/product">Business</Link  >
        </div>
      
         
        </div>
  )
}
