import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import style from "./slider.module.css"
const images = [
  { url: "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049977/bg-hero-5-1792-x2.png" },
  { url: "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734106/bg-hero-4-1792-x2.png" },
  { url: "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783974/bg-hero-3-1792-x2.png" },
  { url: "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203021/bg-hero-2-1792-x2.png" },
  { url: "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049984/bg-hero-1-1792-x2.png" }
];

export const Slider = () => {
  return (
  <>
    <div className={style.slider}>
    <SimpleImageSlider
    max-width={1500}
    height={504}
    images={images}
    autoPlay={true}
  />
    </div>

    <div className={style.text}>
       <div>
         <div className={style.first}>
         <div>Find the perfect <i>freelance</i></div>
         <div>services for your business</div>
         </div>
         <div className={style.input}>
         <input  placeholder='Try building mobile app...' />
         <button>Search</button>
         </div>
         </div>
  </div> 
    </>
  )
}
