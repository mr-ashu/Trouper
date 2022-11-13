import { HamburgerIcon } from "@chakra-ui/icons"
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { Box } from "@mui/system"
import React,{ useState } from "react"
import { Link } from "react-router-dom"
import { SubNavbar } from "./SubNavbar"

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
              <SubNavbar/>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}