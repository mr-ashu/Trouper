import { grey, red } from '@mui/material/colors'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from "./Product.module.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { useDispatch, useSelector } from 'react-redux'

const getCart=(token)=>{
  return axios.get(`http://localhost:9500/carts`,{
    headers:token
  })
}
export const Cart = () => {
  const store=useSelector((store)=>store.auth)
 
 
  const dispatch=useDispatch()
  const [data,setData]=useState([])
   console.log(store);

   const navigate=useNavigate()
   const token=store.token
 
    console.log(token);
 useEffect(()=>{
    getCart(token).then((res)=>{
     console.log(res);
       setData(res.data)
    })
 },[])

  
if(!store.isAuth){
  
  navigate("/product")

}
  if(data.length==0){
    return <h1>...Your Cart is Empty</h1>
  }

  return (
    <div>
      <div>
        
      </div>
      <div className={style.productdiv}>
           {
            data?.map((el)=>(

              <div key={el.id} className={style.divbox}>
               
                   <div className={style.bagdiv}>
                   <div className={style.sdiv}>
                        
                        <div className={style.idbox}>
                              <p>{}</p>
                              <span className={style.rating1}>{}</span>
                        </div>
                  </div>
                  <Link>{el.title}</Link>
                  <span className={style.rating}>{el.rating}</span>
                   </div>
                 <hr />
                  <div className={style.pricediv}>
                    <DeleteSweepIcon sx={{color:red}}/>
                     <span className={style.price}>
                      <p>STARTING AT</p>
                       {el.price}
                    </span>
                  </div>
              </div>
            ))
           }

         </div>





    </div>
  )
}
