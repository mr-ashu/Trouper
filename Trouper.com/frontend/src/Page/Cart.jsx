import { grey, red } from '@mui/material/colors'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from "./Product.module.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { useDispatch, useSelector } from 'react-redux'
import "./cart.css"
 
export const Cart = () => {
  const   {user,token,isAuth}=useSelector((store)=>store.auth)
  
  const [loading,setloading]=useState(true)
 
  const [data,setData]=useState([])
  

   const navigate=useNavigate()
   
 
   
 useEffect(()=>{
  
 getCart()

 },[])

 const getCart=()=>{
  axios.get(`https://trouper-org.onrender.com/carts`,{
    headers: {
      token: token.token,
    }
  })
  .then((res)=>{
     setData(res.data)
     setloading(false)
  })
 }

const remove=(id)=>{
  axios.delete(`https://trouper-org.onrender.com/carts/${id}`,{
    headers: {
      token: token.token,
    }
  })
  .then((res)=>{
    
    getCart()
     alert("Delete sucess")
  })
}

if(!isAuth){
  
  navigate("/product")

}
 
  return (
    <div>
      <div className="userbox">
           <div>
              <h3><span>Name:</span> {user.name}</h3>
              <h3><span>User_Id:</span> {user.userId}</h3>
           </div>
          <div className='uibox'>
              <h3><span>Email :</span> {user.email}</h3>
              <h3> <span>Total Order :</span>{data.length}</h3>
          </div>
      </div>

      {
        loading?<div>...Loading</div>:
      
      <div className={style.productdiv}>
           {
            data?.map((el)=>(

              <div key={el._id} className={style.divbox}>
               
                   <div className={style.bagdiv}>
                   <div className={style.sdiv}>
                        
                        <div className={style.idbox}>
                              <p>{el.product.name}</p>
                              <span className={style.rating1}>{el.product.lavel}</span>
                        </div>
                  </div>
                  <Link>{el.product.title}</Link>
                  <span className={style.rating}>{el.product.rating}</span>
                   </div>
                 <hr />
                  <div className={style.pricediv}>

                  <DeleteSweepIcon onClick={()=>remove(el._id)} />
                  
                   
                     <span className={style.price}>
                      <p>STARTING AT</p>
                       {el.product.price}
                    </span>
                  </div>
              </div>
            ))
           }

         </div>

          }



    </div>
  )
}
