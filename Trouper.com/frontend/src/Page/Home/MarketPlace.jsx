import React from 'react'
import style from "./marketplace.module.css";

export const MarketPlace = () => {
  return (
    <div className={style.MarketPlace}>
    <h1>Explore MarketPlace</h1>

    <div className={style.Market}>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/3939/3939992.png" />
          <p>Graphics & Design</p>
        </div>
        <div>
           <img src="https://cdn-icons-png.flaticon.com/512/1968/1968641.png" />
           <p>Digital Marketing</p>
        </div>
        <div>
        <img src="https://cdn-icons-png.flaticon.com/512/3898/3898840.png" />
        <p>Writing & Translation</p>
        </div>
        <div>
        <img src="https://cdn-icons-png.flaticon.com/512/4427/4427916.png" />
        <p>Video & Animation</p>
        </div>
        <div>
        <img src="https://cdn-icons-png.flaticon.com/512/2882/2882867.png" />
           <p>Music & Audio</p>
        </div>
        <div>
        <img src="https://cdn-icons-png.flaticon.com/512/1336/1336494.png" />
           <p>Pragramming & Tech</p>
        </div>
        <div>
        <img src="https://cdn-icons-png.flaticon.com/512/493/493808.png" />
           <p>Business</p>
        </div>
        <div>
        <img src="https://cdn-icons-png.flaticon.com/512/2853/2853364.png" />
           <p>Lifestyle</p>
        </div>
        <div>
        <img src="https://cdn-icons-png.flaticon.com/512/2782/2782058.png" />
           <p>Data</p>
        </div>
        
    
    </div>
    </div>
  )
}
