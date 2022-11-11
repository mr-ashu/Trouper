import React from 'react'
import { Link } from 'react-scroll'

// import styles from "../SinglePage/Nav.module.css"
import styles from "../../Page/SinglePro/Nav.module.css"
function Navigation() {
  return (
    <>
    <div className={styles.nav} w={{ base: '20%', md: '40%', lg: '50%' , xl:"61%" }}   >
        <div className={styles.sec1}  >
            <Link to="about" >overview</Link>
            <Link to="overview" >about the seller</Link>
            <Link>campaire packages</Link>
            <Link>review</Link>
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