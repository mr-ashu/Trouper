 
 
 
import React, { useEffect, useState } from 'react'
import { Link, resolvePath, useNavigate } from 'react-router-dom';
import style from "./Product.module.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { grey } from '@mui/material/colors';
import { GridItem } from '@chakra-ui/react';
import axios from 'axios';
import { display } from '@mui/system';

const getApiData = () =>{
  return axios.get("http://localhost:9500/products") 
}
 
function ProductPage() {
   
    const [data,setdata]=useState([]);
  
  const [v, setv]=useState("")
  const navigate=useNavigate()
  
  let x=localStorage.getItem("pdata")
 
 

 
useEffect(()=>{
    getApiData().then((res)=>{
    setdata(res.data)
     })
  

   
   },[])

 
// if(l==0){
//     navigate("/")
    
// }
 
   

 
  if(v==="inc" ){
    data.sort(function(a,b){
      var x=a.rating;
      var y=b.rating;
      if(x>y){
        return 1;
      }
      if(x<y){
        return -1;
      }
      return 0;

    });
  }

  if(v==="dic"){
    data.sort(function(a,b){
      var x=a.rating;
      var y=b.rating;
      if(x>y){
        return -1;
      }
      if(x<y){
        return 1;
      }
      return 0;

    });
  }
  
  if(v==="asc" ){
    data.sort(function(a,b){
      var x=a.price;
      var y=b.price;
      if(x>y){
        return 1;
      }
      if(x<y){
        return -1;
      }
      return 0;

    });
  }

  if(v==="des"){
    data.sort(function(a,b){
      var x=a.price;
      var y=b.price;
      if(x>y){
        return -1;
      }
      if(x<y){
        return 1;
      }
      return 0;

    });
  }
    

 return (
     <>
     <h1 className={style.categorytitle}>{x}</h1>
     <div className={style.filter}>
        <div className='slctdiv'>
        <select onChange={(e)=>setv(e.target.value)}  value={v} className={style.slct}>
          <option value="">Sort By Price</option>
          <option value="asc">ASC</option>
          <option value="des">DESC</option>
        </select>
        <select onChange={(e)=>setv(e.target.value)}  value={v} className={style.slct}>
        <option value="">Sort By Rating</option>
          <option value="inc">ASC</option>
          <option value="dic">DESC</option>
          </select>
        </div>

        <div>18 services available</div>
     
     </div>
  
      
        
     
         <div className={style.productdiv}>
           {
            data?.filter((el)=>el.category==x).map((el)=>(

              <div key={el.id} className={style.divbox}>
                  
                  <img src="data:image/jpeg;base64,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" alt="" />
                   <div className={style.bagdiv}>
                   <div className={style.sdiv}>
                        <img src={el.profilePic} alt="" />
                        <div className={style.idbox}>
                              <p>{el.name}</p>
                              <span className={style.rating1}>{el.lavel}</span>
                        </div>
                  </div>
                  <Link to={`/product/${el.id}`}>{el.title}</Link>
                  <span className={style.rating}>{el.rating}</span>
                   </div>
                 <hr />
                  <div className={style.pricediv}>
                    <FavoriteIcon sx={{color:grey[500]}}/>
                     <span className={style.price}>
                      <p>STARTING AT</p>
                       {el.price}
                    </span>
                  </div>
              </div>
            ))
           }

         </div>
 
     </>
  )
}

 
  export default ProductPage



 
 
 
