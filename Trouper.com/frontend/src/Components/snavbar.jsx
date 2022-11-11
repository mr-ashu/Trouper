import { HamburgerIcon } from "@chakra-ui/icons"
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { Box } from "@mui/system"
import React,{ useState } from "react"
import { Link } from "react-router-dom"

export const Snavbar=()=> {
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
          <Button background="none" color="#22C35E" border="1px solid green" fontSize="18px"  padding="7px 20px">
            <Link color='#22C35E' to="signup"> Join Trouper</Link>
            
          </Button>
          </DrawerHeader>
          <DrawerBody>
            <Text fontWeight="bold">GENERAL</Text>
            <hr />
          <Text  >
            <Link to="/admin">Become a Seller </Link>
          </Text>
           
          <Text className='cart1' > 
           <Link to="/cart">Cart</Link>
          </Text>

           <Text className='signin1'>
            <Link to="/signin">Sign in</Link>
           </Text>
           <hr />
            <Box>
              <Text fontWeight="bold">CATEGORY</Text>
              <hr />
              <div className='subNavbar1'>
                    <Link to="">Graphics & Design</Link>
                    <Link to="">Digital Marketing</Link>
                    <Link to="">Writing & Transition</Link>
                    <Link to="">Video & Animation</Link>
                    <Link to="">Music & Audio</Link>
                    <Link to="">Programming & Tech</Link>
                    <Link to="">Business</Link>
              </div>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}