import React from "react";
import {
  VStack,
  Box,
  Image,
  Text,
  Grid,
  GridItem,
  Select,
  Flex,
  Button
} from "@chakra-ui/react";
import NavPay from "./Payment.Nav";
import Rating from "./Rating";


const Payment = () => {
  return (
    <>
      <NavPay />

      <VStack mt="-10" ml="-10px">
        <Flex>
          <Box>
          <Box mb="130px">
            <Grid templateColumns="repeat(5, 220px)">
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
                <Rating />
              </GridItem>

              <GridItem ml="20">Qty</GridItem>
              <GridItem ml="-50px">
                {" "}
                <Select h="8" w="70px">
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                  <option value="option3">4</option>
                  <option value="option3">5</option>
                  <option value="option3">6</option>
                  <option value="option3">7</option>
                  <option value="option3">8</option>
                  <option value="option3">9</option>
                  <option value="option3">10</option>
                </Select>
              </GridItem>
              <GridItem ml="-500" fontWeight="bold">
                ₹5,918.60
              </GridItem>
            </Grid>
            </Box>
          <hr />
          </Box>

          
          <Box>
            <Box p="5" border="1px solid grey" w="300px" h="350px">
              <Text fontSize="19px" fontWeight="bold" textAlign="left" mb="5">
                Payment Price
              </Text>
              <Grid templateColumns="repeat(5, 1fr)" gap={4} textAlign="left" >
                <GridItem colSpan={3} h="10" color="#898A89" fontWeight="bold" >
                  Subtotal
                </GridItem>
                <GridItem colStart={4} colEnd={6} h="10" >
                  ₹5,918.60
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(5, 1fr)" gap={4} textAlign="left">
                <GridItem colSpan={3} h="10" color="#898A89" fontWeight="bold" >
                Service Fee

                </GridItem>
                <GridItem colStart={4} colEnd={6} h="10" textAlign="end">
                ₹325.52
                </GridItem>
              </Grid>
              <hr style={{background:"grey"}} />
              <Grid templateColumns="repeat(5, 1fr)" gap={4} >
                <GridItem colSpan={3} h="10" textAlign="left" fontWeight="600">
                Total

                </GridItem>
                <GridItem colStart={4} colEnd={6} h="10" textAlign="end">
                ₹6,244.12
                </GridItem>
              </Grid>

              <Grid templateColumns="repeat(5, 1fr)" gap={4} >
                <GridItem colSpan={3} h="10" textAlign="left" fontWeight="600">
                Delivery Time
                </GridItem>
                <GridItem colStart={4} colEnd={6} h="10" textAlign="end" fontWeight="600" color="grey">
                2 days

                </GridItem>
              </Grid>
              <Button colorScheme='whatsapp' bg="#1dbf73  " p="25px" w="auto" pl="45px" pr="45px" fontSize="17px" borderRadius="5px" color="white">Contiune to Checkout</Button>
            </Box>
          </Box>
        </Flex>
      </VStack>
    </>
  );
};

export default Payment;
