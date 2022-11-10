
import { useState } from "react";
//import logo from "../anjali_Home_Image/logo.jpeg";
import logo from "../Logo/Fiverr-Logo.png";
import { Input,Button } from "@chakra-ui/react"
import {Search2Icon} from "@chakra-ui/icons"
import "./navbar.css"
const Navbar = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);
  
    const updateMenu = () => {
      if (!isMenuClicked) {
        setBurgerClass("burger-bar clicked");
        setMenuClass("menu visible");
      } else {
        setBurgerClass("burger-bar unclicked");
        setMenuClass("menu hidden");
      }
  
      setIsMenuClicked(!isMenuClicked);
    };
  
  
    return (
      <>
        
        <div className="navbar">
        <div className="navlogo">
           <img src={logo} alt="logo" />
        </div>

        <div className="Input">
           <Input variant='outline' placeholder='Outline' />
           <Button  variant='outline' ><Search2Icon /></Button>
        </div>

        <div>
            <div></div>
        </div>
        </div>
       


{/* ------------------------------------------------------------------------------------------- */}


        
      </>
    );
  }

export {Navbar};