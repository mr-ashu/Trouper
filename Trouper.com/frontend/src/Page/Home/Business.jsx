import React from 'react';
import style from "./business.module.css";
import { CheckCircleIcon } from "@chakra-ui/icons";

export const Business = () => {
  return (
    <div>
       <div className={style.business}>
           <div className={style.left}>
              <h1 className={style.first}>Trouper Business</h1>
              <h2 className={style.second}>A business solution</h2>
              <h2 className={style.second}>designed for <i>teams</i></h2>
              <p className={style.third}><CheckCircleIcon mr="8px"/> Connect to freelancers with proven business experience</p>
              <p className={style.third} ><CheckCircleIcon mr="8px" /> Connect to freelancers with proven business experience
                 Get matched with the perfect talent by a customer success manager</p>
              <p className={style.third} ><CheckCircleIcon mr="8px" /> Manage teamwork and boost productivity with one powerful workspace</p>
              <button  className={style.btn5}>Explore Trouper Business</button>
           </div>
           <div className={style.right}>
              <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"/>
           </div>
       </div>
    </div>
  )
}
