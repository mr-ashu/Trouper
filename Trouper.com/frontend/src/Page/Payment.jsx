import axios from "axios";

import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Flex,
  VStack,
  Heading,
 
 
  FormControl,
  FormLabel,
 
  IconButton,
  Input,
  InputGroup,
 
 
 
  Textarea,
 
  useClipboard,
  InputLeftElement,
  SimpleGrid,
 
 
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Tooltip } from "react-bootstrap";
import { useSelector } from "react-redux";
 

const Payment = () => {
  const [data, setdata] = useState([]);
  let { id } = useParams();
  const  {user,token} =useSelector((store)=>store.auth)
 const navigate=useNavigate()
 
  useEffect(() => {
    axios.get(`https://trouper-org.onrender.com/products/${id}`).then((res) => {
      setdata(res.data);
    });
  }, []);
 
  const payment=()=>{
    const payload={
       product:id
    }
    axios.post(`https://trouper-org.onrender.com/carts`,payload, {
      headers: {
        token: token.token,
      }
    })
    .then((res)=>{
      alert("order sucess")
      navigate("/cart")
    })
  }
  return (
    <>
  <SimpleGrid width={"90%"} margin="auto" 
  columns={[1, 1, 2]} 
  >
  <Box
       w="100%"
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}>
              Payment Details
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}>
             

              <Box
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="lg"
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base">
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Card Number</FormLabel>

                    <InputGroup>
                      <InputLeftElement   />
                      <Input type="number" name="name" placeholder="Card Number" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Card Holder Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement  />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Card Holder Name "
                      />
                    </InputGroup>
                  </FormControl>
                
                <Flex gap={"20px"} justifyContent="space-between">
                  <Input type="date" />
                  <Input placeholder="CVV"/>
                </Flex>
           

               
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
 
      
        <Box
         
         w="100%"
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Stack
            textAlign={"center"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"center"}
          >
            <Text
              fontSize={"sm"}
              fontWeight={500}
              bg={useColorModeValue("green.50", "green.900")}
              p={2}
              px={3}
              color={"green.500"}
              rounded={"full"}
            >
            Id:  {user.userId}
            </Text>
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={"3xl"}>$</Text>
              <Text fontSize={"6xl"} fontWeight={800}>
               {data.price}
              </Text>
              
            </Stack>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
               {data.category}
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                 {data.rating}
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
              {data.lavel}
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                All features
              </ListItem>
            </List>

            <Button
              mt={10}
              w={"full"}
              bg={"teal"}
              color={"white"}
              rounded={"xl"}
              boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
              _hover={{
                bg: "green.500",
              }}
              _focus={{
                bg: "green.500",
              }}
              onClick={payment}
            >
              Make Payment
            </Button>
          </Box>
        </Box>
 </SimpleGrid>
    </>
  );
};

export default Payment;
