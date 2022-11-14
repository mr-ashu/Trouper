import { Flex, Image, Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
// import Logo_F from "../Logo/Fiveer-Logo.png"
const NavPay = () => {
  return (
    <Box justifyContent="left" textAlign="left">
      <Flex fontSize="21px" gap="8px" p="8" >
        <Box boxSize="140px" >
          <Image 
          pt="3"
            src="https://miro.medium.com/max/608/1*83ea0-gKieSinthdD9vjFg.jpeg "
            alt="fiverr_logo"
          />
        </Box>
        {/* <Box ml="5" mt="3"><span style={{color:"#000",borderRadius:"50%", background:"#fff",width:"36px",height:"36px" ,padding:"10px" , border:"3px solid #000",textAlign:"center",font:"32px Arial,sans-serif"}}>1</span>Order Details > </Box>
         */}
        <Box
          ml="5"
          mt="3"
          borderRadius="50%"
          h="36px"
          w="36px"
          bg="#1dbf73"
          mr="-18px"
          textAlign="center"
          color="white"
        >
          1
        </Box>
        <Box ml="5" mt="3">
          {" "}
          {`Order Details >`}{" "}
        </Box>
        <Box
          ml="5"
          mt="3"
          borderRadius="50%"
          h="36px"
          w="36px"
          bg="#1dbf73"
          textAlign="center"
          color="white"
        >
          2
        </Box>

        <Box mt="3" color="grey">
          {`Confrim & Pay >`}{" "}
        </Box>
        <Box
          ml="5"
          mt="3"
          borderRadius="50%"
          h="36px"
          w="36px"
          bg="#1dbf73"
          textAlign="center"
          color="white"
        >
          3
        </Box>

         <Box mt="3" color="grey">{`Submit Requirements >`}</Box> 
      </Flex>
      {/* <Box><span style={{color:"#000",borderRadius:"50%", background:"#fff",width:"36px",height:"36px" ,padding:"10px" , border:"3px solid #000",textAlign:"center",font:"32px Arial,sans-serif"}}>1</span></Box> */}
    </Box>
  );
};

export default NavPay;
