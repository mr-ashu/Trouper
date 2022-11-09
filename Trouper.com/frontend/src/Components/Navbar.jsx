
import React from 'react';
import "./navbar.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export const Navbar = () => {
  return (
    <div className='navbar'>
       <div className='logo'>
          <h3>Trouper</h3>
       </div>
       <div className=''>
          <input placeholder='What service you are looking for today?' />
          <button></button>
       </div>
       <div className='other'>
         <FavoriteBorderIcon />
       </div>
       <div className='log'></div>
    </div>
  )
}
