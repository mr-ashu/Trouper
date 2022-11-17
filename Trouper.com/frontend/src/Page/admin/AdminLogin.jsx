import React from 'react'
import { Link as ReactLink, useNavigate,} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
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
  Divider,
  Text,
  Link,
  Flex,
  Checkbox,
  FormLabel,
  useToast
} from "@chakra-ui/react";
 
import AdminSignUp from './AdminSignUp';
import { SIGN_OUT } from '../../Redux/auth/admin.type';
import { Adminlogin } from '../../Redux/auth/admin.action';
 

const initialFormData = {
  email: "",
  password: "",
  remember: false
};

export default function AdminSignIn() {
  const [formData, setFormData] = React.useState(initialFormData);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth }=useSelector((store)=>store.adminAuth);
  const toast = useToast()
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const navigate=useNavigate()
  const handleChangeFormData = (e) => {
    const { type, checked, value, name } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };
   
  const handleSubmit = (e) => {
    e.preventDefault();
 dispatch(Adminlogin(formData))

      onClose()
    setFormData(initialFormData)
  };
 


const handleLogOut = () =>{
  dispatch({ type:SIGN_OUT })
  toast({
    title: 'Log out successful.',
    status: 'success',
    duration: 5000,
    position:"top",
    isClosable: true,
  })
}
 
if(isAuth){
 
    navigate("/dashboard")
}

  return (
    <>
      {isAuth?( 
      <Button 
      border="none" 
      background="red" 
      color="white"  
      _hover={{ bg: 'transparent', color:"red" ,border:"1px solid #22C35E"}} 
       _active={{ bg: 'none',}}   
       fontSize="16px"  
       padding="12px 22px" 
        onClick={handleLogOut}>Log Out</Button>):( 
       <Button 
       border="none" 
       background="#22C35E" 
       color="white"  
       _hover={{ bg: 'transparent', color:"#22C35E" ,border:"1px solid #22C35E"}}  
       _active={{ bg: 'none',}}   
       fontSize="16px"  
       padding="12px 22px" 
       onClick={onOpen}>Sign In</Button>)}

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
              <Heading as="h6" size="lg">
                Sign In
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
                    <Heading fontSize="sm" as="h5">
                      OR
                    </Heading>
                  </Center>
                </FormControl>

                <FormControl isRequired>
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
                <FormControl isRequired>
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
                <FormControl mt={4}>
                  <Button
                    type="submit"
                    size="md"
                    width="100%"
                     
                    // spinner={<BeatLoader size={8} color='white' />}
                    colorScheme="green"
                  >
                    Continue
                  </Button>
                </FormControl>
                <FormControl mt={4}>
                  <Stack
                    direction="row"
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox
                      type="checkbox"
                      name="remember"
                      onChange={handleChangeFormData}
                      checked={formData.remember}
                    >
                      Remember me
                    </Checkbox>
                   
                  </Stack>
                </FormControl>
                <Divider />
                <Flex fontSize="sm" mt="20px" alignItems="center">
                  <Text mr="10px">Not a member yet?</Text>
                  
                     <AdminSignUp/>
                 
                </Flex>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
</>
);
}