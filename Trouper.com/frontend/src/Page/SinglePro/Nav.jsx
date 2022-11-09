import React from 'react'
import styles from "../SinglePage/Nav.module.css"
function Navigation() {
  return (
    <>
    <div className={styles.nav} >
        <div className={styles.sec1}  >
            <p>overview</p>
            <p>about the seller</p>
            <p>campaire packages</p>
            <p>review</p>
        </div>
        <div className={styles.sec2} >
            <div style={{border : "1px solid yellow"}} >hand_b</div>
            <div style={{border : "1px solid yellow"}} >love</div>
            <div style={{border : "1px solid yellow"}} >like_c</div>
        </div>
    </div>
    </>
  )
}

export default Navigation