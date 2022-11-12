import React from "react";
import { VStack, Box, Image, Text, Grid, GridItem, Input, Select } from "@chakra-ui/react";
import NavPay from "./Payment.Nav";
import Rating from "./Rating";

const Payment = () => {
  return (
    <>
      <NavPay />

      <VStack mt="-10" ml="-10px">
        <Box>
          <Grid templateColumns="repeat(5, 240px)">
            <GridItem h="10">
              <Image
                src="https://fiverr-res.cloudinary.com/images/t_medium7,q_auto,f_auto/gigs/237683625/original/c03dbc1ec153fd97bdc97dd79f6d03962f6304dc/develop-nft-professional-website-design.png"
                alt="Web Img"
              />
            </GridItem>
            <GridItem h="10">
              <Text fontWeight="bold">
                I Will develop professional wordpress website design
              </Text>
              <Rating/>
            </GridItem>

            <GridItem ml="20" >Qty</GridItem>
            <GridItem ml="-50px"> <Select w="70px">
  <option value='option1'>1</option>
  <option value='option2'>2</option>
  <option value='option3'>3</option>
  <option value='option3'>4</option>
  <option value='option3'>5</option>
  <option value='option3'>6</option>
  <option value='option3'>7</option>
  <option value='option3'>8</option>
  <option value='option3'>9</option>
  <option value='option3'>10</option>

</Select></GridItem>
            
          </Grid>
          
        </Box>
      </VStack>
    </>
  );
};

export default Payment;
