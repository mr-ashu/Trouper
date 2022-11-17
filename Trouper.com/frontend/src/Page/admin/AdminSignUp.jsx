import React from "react";
import { useDispatch } from "react-redux";
import { Link as ReactLink, Navigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Image,
  Stack,
  FormHelperText,
  Divider,
  Text,
  Link,
  Flex,
  FormLabel,
  useToast,
  Box,
} from '@chakra-ui/react'
import axios from 'axios';
 
import AdminSignIn from "./AdminLogin";
import { LOGIN_ERROR } from "../../Redux/auth/admin.type";
 


const initialFormData = {
  email: "",
  password: "",
  name: "",
  contect:"",
  address:""
};

export default function AdminSignUp() {
  const [formData, setFormData] = React.useState(initialFormData);
  const toast = useToast()
 
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleChangeFormData = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
 
       await axios.post(`http://localhost:9500/products/signup`, formData)
     
      onClose()
      setFormData(initialFormData)
      toast({
        title: 'Account created successfully.',
        status: 'success',
        duration: 5000,
        position:"top",
        isClosable: true,
      })
      localStorage.removeItem("token")
     
    } catch (error) {
      toast({
        title: 'Please provide all the details.',
        description:"May user already exist OR provide all the details . Please use another email and user id",
        status: 'error',
        duration: 5000,
        position:"top",
        isClosable: true,})
      dispatch({ type: LOGIN_ERROR });
    }
   
  }
 

  return (
    <>
      <Button marginLeft="10px" border="none" background="#22C35E" color="white"  _hover={{ bg: 'transparent', color:"#22C35E" ,border:"1px solid #22C35E"}}  _active={{ bg: 'none',}}   fontSize="16px"  padding="12px 22px" onClick={onOpen}>Become a Seller</Button>
      <Modal 
        
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
         
            <ModalHeader>
              <Center>
              <Heading as="h6" size="md">
                 BECOME A TROUPER
              </Heading>
              </Center>
            </ModalHeader>
          
          <ModalCloseButton />
          <ModalBody pb={6} >
            <form onSubmit={handleSubmit}>
              <Stack direction="column" spacing={4} align="center">
                <FormControl mt={4}>
                  <Button
                    type="submit"
                    height="30px"
                    width="100%"
                    colorScheme="blue"
                    fontSize="small"

                  >
                    <Image
                      ml={-5}
                      mr={5}
                      h="15px"
                      w="15px"
                      src="https://accounts.coschedule.com/img/sso-providers/Facebook.svg"
                    />
                    <span>Continue with Facebook</span>
                  </Button>
                </FormControl>
                <FormControl mt={4}>
                  <Button
                     type="submit"
                     height="30px"
                     width="100%"
                     variant="outline"
                     fontSize="small"
                  >
                    <Image
                      ml={-5}
                      mr={5}
                      h="15px"
                      w="15px"
                      src="https://accounts.coschedule.com/img/sso-providers/Google.svg"
                    />
                    <span>Continue with Google</span>
                  </Button>
                </FormControl>
                <FormControl mt={4}>
                  <Button
                    type="submit"
                    height="30px"
                    width="100%"
                    variant="outline"
                    fontSize="small"
                  >
                    <Image
                      ml={-5}
                      mr={5}
                      h="15px"
                      w="15px"
                      src="https://accounts.coschedule.com/img/sso-providers/apple.svg"
                    />
                    <span>Continue with Apple</span>
                  </Button>
                </FormControl>
                <FormControl>
                  <Center>
                    <Heading fontSize="small" as="h5">
                      OR
                    </Heading>
                  </Center>
                </FormControl>
                <FormControl mt={4} fontSize="small" isRequired>
                <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChangeFormData}
                    placeholder="Inter your Name"
                    size="md"
                  />
                </FormControl>
                <FormControl mt={4} isRequired>
                <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChangeFormData}
                    placeholder="Inter your Email"
                    size="md"
                  />
                </FormControl>
             
                <FormControl mt={4} isRequired>
                <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChangeFormData}
                    placeholder="Inter your Password"
                    size="md"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Contact</FormLabel>
                  <Input
                    type="number"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChangeFormData}
                    placeholder="Inter your contact No."
                    size="md"
                  />
                </FormControl>
                <FormControl mt={4} isRequired>
                <FormLabel>Address</FormLabel>
                  <Input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChangeFormData}
                    placeholder="Inter your address"
                    size="md"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <Button
                    type="submit"
                    size="md"
                    width="100%"
                    colorScheme="green"
                  >
                    Continue
                  </Button>
                  <FormHelperText>
                    By joining I agree to receive emails from Trouper.
                  </FormHelperText>
                </FormControl>
                <Divider />
                <Flex fontSize="sm"  alignItems="center">
                  <Text mr="10px">Already a member?</Text>
                  
                
                  <AdminSignIn onClick={onClose} />
                 
                </Flex>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
</>
);
}