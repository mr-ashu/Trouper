import { grey, red } from '@mui/material/colors'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from "./Product.module.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { useDispatch, useSelector } from 'react-redux'
import "./cart.css"
 
export const Cart = () => {
  const  {user,token,isAuth}=useSelector((store)=>store.auth)
  console.log(user)
 
  const dispatch=useDispatch()
  const [data,setData]=useState([])
  

   const navigate=useNavigate()
   
 
   
 useEffect(()=>{
  axios.get(`https://trouper-org.onrender.com/carts`,{
    headers: {
      token: token.token,
    }
  })
  .then((res)=>{
     setData(res.data)
  })
 },[])


if(!isAuth){
  
  navigate("/product")

}
 if(token.token==undefined){
  return <h1>...Token Invalid please login again</h1>
 }
  if(data.length==0){
    return <h1>...Your Cart is Empty</h1>
  }

  return (
    <div>
      <div className="userbox">
           <div>
              <h3><span>Name:</span> {user.name}</h3>
              <h3><span>UserId:</span> {user.userId}</h3>
           </div>
          <div className='uibox'>
              <h3><span>Email :</span> {user.email}</h3>
              <h3> <span>Total Order :</span>{data.length}</h3>
          </div>
      </div>
      <div className={style.productdiv}>
           {
            data?.map((el)=>(

              <div key={el.id} className={style.divbox}>
               
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
                    <DeleteSweepIcon sx={{color:red}}/>
                     <span className={style.price}>
                      <p>STARTING AT</p>
                       {el.product.price}
                    </span>
                  </div>
              </div>
            ))
           }

         </div>





    </div>
  )
}
