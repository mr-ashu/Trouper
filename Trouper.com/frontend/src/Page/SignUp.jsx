import React from "react";
import { useDispatch } from "react-redux";
import { Link as ReactLink } from "react-router-dom";
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
} from '@chakra-ui/react'
import axios from 'axios';
import { LOGIN_ERROR } from '../Redux/auth/login.types';

 
import { signup } from "../Redux/auth/login.action";
 
 

const initialFormData = {
  email: "",
  password: "",
  name: "",
};

export default function SignUp() {
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
 
       await axios.post(`http://localhost:9500/users/signup`, formData)
     
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
      <Button background="none" color="#22C35E"  _hover={{ bg: 'green.400', color:"white" }}  _active={{ bg: 'none',}} border="1px solid green" fontSize="18px"  padding="7px 20px" onClick={onOpen}>Join</Button>
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
                <Heading   as="h6" size="">
                Join Trouper
              </Heading>
              </Center>
            </ModalHeader>
          
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <Stack direction="column" spacing={4} align="center">
                <FormControl mt={4}>
                  <Button
                    type="submit"
                    height="48px"
                    width="100%"
                    colorScheme="blue"
                    fontSize="md"
                  >
                    <Image
                      ml={-5}
                      mr={5}
                      h="20px"
                      w="20px"
                      src="https://accounts.coschedule.com/img/sso-providers/Facebook.svg"
                    />
                    <span>Continue with Facebook</span>
                  </Button>
                </FormControl>
                <FormControl mt={4}>
                  <Button
                    type="submit"
                    height="48px"
                    width="100%"
                    variant="outline"
                    fontSize="md"
                  >
                    <Image
                      ml={-5}
                      mr={5}
                      h="20px"
                      w="20px"
                      src="https://accounts.coschedule.com/img/sso-providers/Google.svg"
                    />
                    <span>Continue with Google</span>
                  </Button>
                </FormControl>
                <FormControl mt={4}>
                  <Button
                    type="submit"
                    height="48px"
                    width="100%"
                    variant="outline"
                    fontSize="md"
                  >
                    <Image
                      ml={-5}
                      mr={5}
                      h="20px"
                      w="20px"
                      src="https://accounts.coschedule.com/img/sso-providers/apple.svg"
                    />
                    <span>Continue with Apple</span>
                  </Button>
                </FormControl>
                <FormControl>
                  <Center>
                    <Heading fontSize="md" as="h5">
                      OR
                    </Heading>
                  </Center>
                </FormControl>
                <FormControl mt={4}>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChangeFormData}
                    placeholder="Inter your Email"
                    size="lg"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChangeFormData}
                    placeholder="Inter your Name"
                    size="lg"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChangeFormData}
                    placeholder="Inter your Password"
                    size="lg"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>User Id</FormLabel>
                  <Input
                    type="text"
                    name="userId"
                    value={formData.userId}
                    onChange={handleChangeFormData}
                    placeholder="Inter your User Id"
                    size="lg"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <Button
                    type="submit"
                    size="lg"
                    width="100%"
                    colorScheme="green"
                  >
                    Continue
                  </Button>
                  <FormHelperText>
                    By joining I agree to receive emails from Fiverr.
                  </FormHelperText>
                </FormControl>
                <Divider />
                <Flex fontSize="sm" mt="50px">
                  <Text mr="10px">Already a member?</Text>
                  <Link as={ReactLink} color="green">
                    Sign In
                  </Link>
                </Flex>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}