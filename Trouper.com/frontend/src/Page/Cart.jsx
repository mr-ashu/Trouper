import { grey, red } from '@mui/material/colors'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from "../Components/navbar.module.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
const getCart=()=>{
  return axios.get("http://localhost:9500/carts")
 }
export const Cart = () => {
      const [data,setData]=useState([])
  useEffect(()=>{
      getCart().then((res)=>{
        setData(res.data)
      })
  },[])

  if(data.length==0){
    return <h1>...Your Cart is Empty</h1>
  }

  return (
    <div>
      
      <div className={style.productdiv}>
           {
            data?.map((el)=>(

              <div key={el.id} className={style.divbox}>
               
                   <div className={style.bagdiv}>
                   <div className={style.sdiv}>
                        <img src={el.profilePic} alt="" />
                        <div className={style.idbox}>
                              <p>{el.name}</p>
                              <span className={style.rating1}>{el.lavel}</span>
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
