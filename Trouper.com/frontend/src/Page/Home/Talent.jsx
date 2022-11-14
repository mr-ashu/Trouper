
import React from 'react'
import { Link } from 'react-router-dom';
import style from "./talent.module.css";
export const Talent = () => {
  return (
    <div>
      <div className={style.talent}>
        <div>
         <h1>Find the talent needed to</h1>
         <h1>get your business growing.</h1>
         <Link to="/admin"><button className={style.btn4}>Get Started</button></Link>
         </div>
      </div>
    </div>
  )
}
