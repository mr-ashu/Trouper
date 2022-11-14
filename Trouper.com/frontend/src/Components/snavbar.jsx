import { HamburgerIcon } from "@chakra-ui/icons"
import { Avatar, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { Box } from "@mui/system"
import React,{ useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Login from "../Page/Login"
import SignUp from "../Page/SignUp"
import { SubNavbar } from "./SubNavbar"
import style from "./navbar.module.css"
export const Snavbar=()=> {
  const { user, isAuth }=useSelector((store)=>store.auth);
  const { isOpen, onOpen, onClose } = useDisclosure()
 

  return (
    <>
   
      <Button  bg="none" fontSize="35px" onClick={onOpen}>
        <HamburgerIcon/>
      </Button>
      <Drawer  placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent >
          <DrawerHeader borderBottomWidth='1px'>
          {isAuth===true? <Avatar name={user.name}/>:<SignUp />}
          </DrawerHeader>
          <DrawerBody>
            <Text fontWeight="bold">GENERAL</Text>
            <hr />
          <Text  >
            <Link to="/admin">Become a Seller </Link>
          </Text>
           
          <Text className={style.cart1}> 
           <Link to="/cart">Cart</Link>
          </Text>


           <Text className='signin1'>
           <Login />

           </Text>
           <hr />
            <Box>
              <Text fontWeight="bold">CATEGORY</Text>
              <hr />


              <div className={style.std} >
                <SubNavbar/>
              </div>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}