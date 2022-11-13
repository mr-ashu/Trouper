 
import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { Link   } from 'react-router-dom';
import ProductPage from '../Page/ProductPage';
import axios from 'axios';

const getApiData = () =>{
    return axios.get("http://localhost:9500/products") 
  }
export const SubNavbar = () => {
      const [text,setText]=useState("")
    
      const[showData , setShowData] = useState([])
      const  [data,setdata]=useState({...showData})
      const handleclick=(value)=>{
        setText(value)
        let x= data.filter((el)=>el.category==value).map((el)=>{
          return el
         })


        setShowData(x)
       
      
        
   }
  
        useEffect(()=>{
          getApiData().then((res)=>{
        
          setdata(res.data)
      
          })
        
         },[])
 
 

  
  return (
    <div> 
   
       <div className='subNavbar'>
          <Link onClick={()=>handleclick("graphic & design")} to="/product">Graphics & Design</Link  >
          <Link onClick={()=>handleclick("digital marketing")} to="/product">Digital Marketing</Link  >
          <Link onClick={()=>handleclick("Writing & transition")} to="/product">Writing & Transition</Link  >
          <Link onClick={()=>handleclick("video animation")} to="/product">Video & Animation</Link  >
          <Link onClick={()=>handleclick("Music & audio")} to="/product">Music & Audio</Link >
          <Link onClick={()=>handleclick("programming")} to="/product">Programming & Tech</Link  >
          <Link onClick={()=>handleclick("Business")} to="/product">Business</Link  >
        </div>
      
        <div >
        {<ProductPage x={showData} l={showData.length} t={text}/>}
        </div>    
        
        
        </div>
  )
}
