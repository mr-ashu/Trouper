
import React from 'react'
import style from "./logomaker.module.css";

export const LogoMaker = () => {
  return (
    <div>
       <div className={style.flexBox}>
           <div className={style.left3}>
              <div className={style.l1}>Trouper <i>Logo Maker</i></div>
              <div className={style.l2}>Make an incredible logo </div>
              <div className={style.l3}><i>in a minute</i></div>
              <div className={style.l4}>Pre-designed by top talent. Just add your touch.</div>
              <button className={style.btn1}>Try Trouper Logo Maker</button>
           </div>
           <div className={style.right3}>
              <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_1.0/v1/attachments/generic_asset/asset/b49b1963f5f9008f5ff88bd449ec18f7-1608035772453/logo-maker-banner-wide-desktop-1352-2x.png" />
           </div>
       </div>
    </div>
  )
}
