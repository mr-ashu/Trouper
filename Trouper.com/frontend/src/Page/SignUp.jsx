import React, { useEffect } from 'react'
import { Link as ReactLink, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
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
} from '@chakra-ui/react'
import { signup } from '../Redux/auth/login.action';

const initialFormData = {
  name:"",
  email: "",
  password: ""
}

export default function SignUp() {
  const [formData, setFormData] = React.useState(initialFormData)
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const isAuth =useSelector((store)=>store.auth.isAuth);
  const { state } = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const handleChangeFormData = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
console.log(formData)

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(signup(formData));
};

// useEffect(()=>{
//   if(isAuth){
//     if (state.from) {
//       navigate(state.from, { replace: true });
//     } else {
//       navigate("/");
//     }
//   }

// },[isAuth])
  return (
    <>
      <Button onClick={onOpen}>Join</Button>


      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <Center>
            <ModalHeader>
              <Heading as='h6' size='md'>
                Join Trouper
              </Heading>
            </ModalHeader>
          </Center>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <form onSubmit={handleSubmit}>
            <Stack direction='column' spacing={4} align='center'>
              <FormControl mt={4}>
                <Button type='submit' height='48px' width='100%' colorScheme='blue' fontSize='md'>
                  <Image ml={-5} mr={5} h='20px' w='20px' src='https://accounts.coschedule.com/img/sso-providers/Facebook.svg' />
                  <span>Continue with Facebook</span>
                </Button>
              </FormControl>
              <FormControl mt={4}>
                <Button type='submit' height='48px' width='100%' variant='outline' fontSize='md'>
                  <Image ml={-5} mr={5} h='20px' w='20px' src='https://accounts.coschedule.com/img/sso-providers/Google.svg' />
                  <span>Continue with Google</span>
                </Button>
              </FormControl>
              <FormControl mt={4}>
                <Button type='submit' height='48px' width='100%' variant='outline' fontSize='md' >
                  <Image ml={-5} mr={5} h='20px' w='20px' src='https://accounts.coschedule.com/img/sso-providers/apple.svg' />
                  <span>Continue with Apple</span>
                </Button>
              </FormControl>
              <FormControl >
                <Center>
                  <Heading fontSize='md' as='h5'>OR</Heading>
                </Center>
              </FormControl>
              <FormControl mt={4}>
                <Input type='text' name='name' value={formData.name} onChange={handleChangeFormData} placeholder='Inter your Name' size='lg' />
              </FormControl>
              <FormControl mt={4}>
                <Input type='email' name='email' value={formData.email} onChange={handleChangeFormData} placeholder='Inter your Email' size='lg' />
              </FormControl>
              <FormControl mt={4}>
                <Input type='password' name='password' value={formData.password} onChange={handleChangeFormData} placeholder='Inter your Password' size='lg' />
              </FormControl>
              <FormControl mt={4}>
                <Button type='submit' size='lg' width='100%' colorScheme='green'>
                  Continue
                </Button>
                <FormHelperText>By joining I agree to receive emails from Fiverr.</FormHelperText>
              </FormControl>
              <Divider />
              <Flex fontSize='sm' mt='50px'>
                <Text mr='10px'>Already a member?</Text>
                <Link as={ReactLink} color='green'>Sign In</Link>
              </Flex>
            </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}