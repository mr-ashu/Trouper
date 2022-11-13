import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EuroIcon from '@mui/icons-material/Euro';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Input } from '@chakra-ui/input'
import style from "./navbar.module.css"
 import {SearchIcon  } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/button'
import { Text,Image } from "@chakra-ui/react"
import LanguageIcon from '@mui/icons-material/Language';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import SwipeableTemporaryDrawer, { Snavbar }  from './snavbar';
 
import { SubNavbar } from './SubNavbar';
import Login from '../Page/Login';
import SignUp from '../Page/SignUp';
 
 
 
 export const Navbar = () => {
  const [value,setValue]=useState("inr");
 
   return (
   <>
     <div className={style.navBox}>
            <div className={style.snav}>
 
 
          <Snavbar/></div>
          <Link className={style.logo} to="/">
          <Image  src="https://miro.medium.com/max/608/1*83ea0-gKieSinthdD9vjFg.jpeg"  alt=""  w="150px" />
          </Link>
         
 
     
        
        <div className={style.leftNav}>
       
          <Input  padding="10px 2px 10px 16px" placeholder='What service are you looking for today?'/>
          <Button    bg="#222325" color="white" ><SearchIcon/></Button>
        </div>
       
       <div className={style.rightNav}>
           <div className={style.textBox}>
         <Menu >
        <MenuButton font="400 16px Macan,Helvetica Neue,Helvetica,Arial,sans-serif" fontWeight="600"><LanguageIcon fontSize=''/> English</MenuButton>
          <MenuList>
   
             <MenuItem >English</MenuItem>
             <MenuItem >Deutsch</MenuItem>
             <MenuItem >Franch</MenuItem>
             <MenuItem >Itallano</MenuItem>
             <MenuItem >Nederland</MenuItem>
             <MenuItem >Franch</MenuItem>
           </MenuList>
         </Menu>

          <Menu >
        <MenuButton font="400 16px Macan,Helvetica Neue,Helvetica,Arial,sans-serif" fontWeight="600" alignItems="center"><CurrencyRupeeIcon fontSize=''/> INR</MenuButton>
          <MenuList>
   
             <MenuItem ><CurrencyRupeeIcon/>  INR</MenuItem>
             <MenuItem ><AttachMoneyIcon/>  Dollar</MenuItem>
             <MenuItem ><EuroIcon/>  Euro</MenuItem>
             <MenuItem ><CurrencyPoundIcon/>  Pound</MenuItem>
             
           </MenuList>
         </Menu>
        
          <Text  >
            <Link to="/admin">Become a Seller </Link>
          </Text>
            </div>
          <Text className={style.cart} > 

            <Link to="/cart">Cart</Link>
          </Text>
  
           <Text className={style.signin}>
                 <Login/>
           </Text>
          
               <SignUp />
            
            
 
       </div>
    
     </div>
     <hr />
 
       <SubNavbar/>
   <hr />

   </>
   )
 }