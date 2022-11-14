import React, {useState, useEffect} from "react";
import axios from "axios";
//import ReactDOM from "react-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import style from  "../Home/viewed.module.css";
import { StarIcon } from "@chakra-ui/icons";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom";

const getData = () => {
   return axios.get("http://localhost:9500/products")

}

export const Viewed = () => {
   const [data, setData] = useState([])

   useEffect(() => {
     getData().then((res) =>{
        setData(res.data)
        console.log(res.data)
     })
     
   },[])

    return (
       <div className={style.view}>
           <div className={style.heading}>
           Recently Viewed & More
           </div>
        <Carousel interval={2000}>
            <Carousel.Item className={style.Home_carousel_Third_container}>
                <div className={style.Home_carousel_item_Third}>
                 { 
                    data.map((ele) => (

                 
                    <div className={style.Home_Featured_Brands_Item}>
                        <div>
                            <img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/234797894/original/9ea978270661f57ea75ecf8999e51bced943b09d.jpg" alt="" />
                        </div>
                        <div className={style.pad}>
                        <div className={style.inner_box}>
                           <div>
                           <img src={ele.profilePic} />
                           </div>
                           <div>
                              <h2>{ele.name}</h2>
                              <p>{ele.lavel}</p>
                            </div>
                        </div>
                        <div className={style.font}>
                          <Link to={`/product/${ele._id}`}> {ele.title}</Link>
                        </div>
                        <div className={style.star} >
                          <StarIcon /> {ele.rating}
                        </div>
                        <div className={style.outer_box}>
                            <div>
                            <div>   <FavoriteBorderIcon /> </div>
                            <div>
                               <h2>STARTING AT</h2>
                               <p>{ele.price}</p>
                            </div>

                            </div>
                        </div>
                        </div>
                    </div>

                    ))
                }


                    {/*

                    <div className={style.Home_Featured_Brands_Item}>
                        <div>
                            <img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/182894792/original/f325abd3b1b5dc2c456379690b972876e61eb91d.jpg" alt="" />
                        </div>
                        <div className={style.pad}>
                        <div className={style.inner_box}>
                           <div>
                           <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/7462b5f3951df31f53a754c1856df151-1553516664884/c4ce32ed-de0c-4be3-a54c-7941402476df.jpg" />
                           </div>
                           <div>
                              <h2>kellylopez1</h2>
                              <p>Top Realated Seller</p>
                            </div>
                        </div>
                        <div className={style.font}>
                           I will your full design process fashion freelance...
                        </div>
                        <div className={style.star}>
                          <StarIcon /> 5.0
                        </div>
                        <div className={style.outer_box}>
                            <div>
                            <div>   <FavoriteBorderIcon /> </div>
                            <div>
                               <h2>STARTING AT</h2>
                               <p>Rs.3394</p>
                            </div>

                            </div>
                        </div>
                        </div>
                    </div>

                    <div className={style.Home_Featured_Brands_Item}>
                        <div>
                            <img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/242926568/original/2b2f4da2fc2d6b5d3dbb184be0f35bc5ed4403d9.jpg" alt="" />
                        </div>
                        <div className={style.pad}>
                        <div className={style.inner_box}>
                           <div>
                           <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b13a2299d72cbec79d73f42f19a1d40b-1646935596444/593fd7a7-37c9-49b1-8f28-6ca6f1c6bbe1.jpg" />
                           </div>
                           <div>
                              <h2>mahfujr_rah</h2>
                              <p>Top Realated Seller</p>
                            </div>
                        </div>
                        <div className={style.font}>
                           I will built nft website, nft marketplace, nft mint...
                        </div>
                        <div className={style.star}>
                          <StarIcon /> 4.7
                        </div>
                        <div className={style.outer_box}>
                            <div>
                            <div>   <FavoriteBorderIcon /> </div>
                            <div>
                               <h2>STARTING AT</h2>
                               <p>Rs.1173</p>
                            </div>

                            </div>
                        </div>
                        </div>
                    </div>

                    <div className={style.Home_Featured_Brands_Item}>
                        <div>
                            <img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/115738132/original/ecc1d9d9be254c1ff5212759b65bc1fc1cbf2466.png" alt="" />
                        </div>
                        <div className={style.pad}>
                        <div className={style.inner_box}>
                           <div>
                           <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/ce676f6ad229435a7cd825672e52eb6a-1667209510985/80aaaf86-33a0-41a1-95c7-6ac4addf313a.jpg" />
                           </div>
                           <div>
                              <h2>sabirpro</h2>
                              <p>Top Realated Seller</p>
                            </div>
                        </div>
                        <div className={style.font}>
                           I will promoote advertise website...
                        </div>
                        <div className={style.star}>
                          <StarIcon /> 5.0
                        </div>
                        <div className={style.outer_box}>
                            <div>
                            <div>   <FavoriteBorderIcon /> </div>
                            <div>
                               <h2>STARTING AT</h2>
                               <p>Rs.849</p>
                            </div>

                            </div>
                        </div>
                        </div>
                    </div>

                    <div className={style.Home_Featured_Brands_Item}>
                        <div>
                            <img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/242926568/original/2b2f4da2fc2d6b5d3dbb184be0f35bc5ed4403d9.jpg" alt="" />
                        </div>
                        <div className={style.pad}>
                        <div className={style.inner_box}>
                           <div>
                           <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/6b50871c5eebe9c158281e6aedbdc866-1647270016966/636e5f9a-1c4c-408a-9e00-7784c7f74676.png" />
                           </div>
                           <div>
                              <h2>ahsanaq</h2>
                              <p>Level 2 seller</p>
                            </div>
                        </div>
                        <div className={style.font}>
                           I will work on freelance journalist across news an...
                        </div>
                        <div className={style.star}>
                          <StarIcon /> 5.0
                        </div>
                        <div className={style.outer_box}>
                            <div>
                            <div>   <FavoriteBorderIcon /> </div>
                            <div>
                               <h2>STARTING AT</h2>
                               <p>Rs.1697</p>
                            </div>

                            </div>
                        </div>
                        </div>
                    </div>

    */}
                </div>
               
            </Carousel.Item>

            <Carousel.Item className={style.Home_carousel_Third_container}>
                <div className={style.Home_carousel_item_Third}>
                { 
                    data.map((ele) => (

                 
                    <div className={style.Home_Featured_Brands_Item}>
                        <div>
                            <img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/234797894/original/9ea978270661f57ea75ecf8999e51bced943b09d.jpg" alt="" />
                        </div>
                        <div className={style.pad}>
                        <div className={style.inner_box}>
                           <div>
                           <img src={ele.profilePic} />
                           </div>
                           <div>
                              <h2>{ele.name}</h2>
                              <p>{ele.lavel}</p>
                            </div>
                        </div>
                        <div className={style.font}>
                           {ele.title}
                        </div>
                        <div className={style.star} >
                          <StarIcon /> {ele.rating}
                        </div>
                        <div className={style.outer_box}>
                            <div>
                            <div>   <FavoriteBorderIcon /> </div>
                            <div>
                               <h2>STARTING AT</h2>
                               <p>{ele.price}</p>
                            </div>

                            </div>
                        </div>
                        </div>
                    </div>

                    ))
                }

                   
                </div>
               
            </Carousel.Item>

        </Carousel>
        </div>
    );
}


