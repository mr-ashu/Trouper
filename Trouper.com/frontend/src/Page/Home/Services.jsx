import React from "react";
//import ReactDOM from "react-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import style from "./services.module.css";


export const Services = () => {

    return (
        <div className={style.service}>
         <div className={style.service_head}>
           Popular professional services
         </div>
       
        <Carousel interval={2000}>
            <Carousel.Item className={style.Home_carousel_Third_container1}>
                <div className={style.Home_carousel_item_Third1}>
                    <div className={style.Home_Featured_Brands_Item1}>
                        <div>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png" alt="" />
                        </div>
                        <div>
                        <p>Unlock growth online</p>
                        <h1>SEO</h1>
                        </div>
                    </div>

                    <div className={style.Home_Featured_Brands_Item1}>
                        <div>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png" alt="" />
                        </div>
                        <div>
                        <p>Color your dreams</p>
                        <h1>Illustration</h1>
                        </div>
                    </div>

                    <div className={style.Home_Featured_Brands_Item1}>
                        <div>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png" alt="" />
                        </div>
                        <div>
                        <p>Go global</p>
                        <h1>Translation</h1>
                        </div>
                    </div>

                    <div className={style.Home_Featured_Brands_Item1}>
                    <div>
                      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png" alt="" />
                    </div>
                        <div>
                        <p>Learn your business</p>
                        <h1>Data Entry</h1>
                        </div>
                    </div>

                    <div className={style.Home_Featured_Brands_Item1}>
                        <div>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png" alt="" />
                        </div>
                        <div>
                            <p>Show your story</p>
                            <h1>Book Cover</h1>
                        </div>
                    </div>

                   
                </div>
               
            </Carousel.Item>

            <Carousel.Item className={style.Home_carousel_Third_container1}>
                <div className={style.Home_carousel_item_Third1}>
                    <div className={style.Home_Featured_Brands_Item1}>
                        <div>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png" alt="" />
                        </div>
                        <div>
                        <p>Build your brand </p>
                        <h1>Logo Design</h1>
                        </div>
                    </div>

                    <div className={style.Home_Featured_Brands_Item1}>
                        <div>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png" alt="" />
                        </div>
                        <div>
                        <p>Customize your site</p>
                        <h1>WordPress</h1>
                        </div>
                    </div>

                    <div className={style.Home_Featured_Brands_Item1}>
                        <div>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png" alt="" />
                        </div>
                        <div>
                        <p>Share your message</p>
                        <h1>Voice Over</h1>
                        </div>
                    </div>

                    <div className={style.Home_Featured_Brands_Item1}>
                        <div>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png" alt="" />
                        </div>
                        <div>
                        <p>Engage your audience </p>
                        <h1>Video Explainer</h1>
                        </div>
                    </div>

                    <div className={style.Home_Featured_Brands_Item1}>
                        <div>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png" alt="" />
                        </div>
                        <div>
                        <p>Reach more customers</p>
                        <h1>Social Media</h1>
                        </div>
                    </div>

                   
                </div>
               
            </Carousel.Item>

        </Carousel>
        </div>
    );
}


