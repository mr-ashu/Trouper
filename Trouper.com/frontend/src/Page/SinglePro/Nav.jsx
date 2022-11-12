import React from 'react'
  import { Link } from 'react-scroll'
// import { Link } from 'react-router-dom';
 
import MenuIcon from '@mui/icons-material/Menu';
import ShareIcon from '@mui/icons-material/Share';
// import styles from "../SinglePage/Nav.module.css"
import styles from "../../Page/SinglePro/Nav.module.css"
import { useState } from 'react';
 
import AlertCom from './AlertCom';
import { Button } from '@chakra-ui/react';
function Navigation() {

  const[likeCount , setLikeCount] = useState(0)

  const handleLikeCount = ()=>{
    setLikeCount(likeCount+1)
    // <AlertCom/> 
  }

  return (
    <>
    <div className={styles.nav} w={{ base: '20%', md: '40%', lg: '50%' , xl:"61%" }}   >
        <div className={styles.sec1}>
            <Link to="overview" >Overview</Link>
            <Link to="about" >About the seller</Link>
            {/* <Link>Compare packages</Link> */}
            <Link to="reviews" >Reviews</Link>
        </div>
        <div className={styles.sec2} >
            <Button style={{border : "1px solid yellow"}} className={styles.menuIcon} ><MenuIcon/></Button>
            <div className={styles.likeCountDiv} >
            <button style={{border : "1px solid yellow"}} className={styles.likeIcon} onClick={handleLikeCount} > <AlertCom/>  </button>
            <div style={{border : "1px solid yellow"}} ><div className={styles.countShowCont} >{likeCount}</div></div>
            </div>
            <Button className={styles.shareIcon} ><ShareIcon/></Button>
        </div>
    </div>
    </>
  )
}

export default Navigation


/*
<Flex>
  <Flex p='6'   gap="3" textAlign="center" >
    <Link>overview</Link> 
    <Text>about the seller</Text> 
    <Text>Compare packages</Text> 
    <Text>Reviews</Text> 
  </Flex>
  <Spacer />
  <Flex p='4'   gap="3">
    <Button>dkf</Button>
    <Button>fdfdf</Button>
     <Button>dkf</Button>
    <Button>fdfdf</Button>
  </Flex>
</Flex>
*/