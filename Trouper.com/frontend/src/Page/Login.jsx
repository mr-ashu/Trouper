import React from 'react'
import { Link as ReactLink,} from "react-router-dom";
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
import { login } from '../Redux/auth/login.action';
import { SIGN_OUT } from '../Redux/auth/login.types';

const initialFormData = {
  email: "",
  password: "",
  remember: false
};

export default function Login() {
  const [formData, setFormData] = React.useState(initialFormData);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth }=useSelector((store)=>store.auth);
  const toast = useToast()
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleChangeFormData = (e) => {
    const { type, checked, value, name } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };
  // console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData))
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

  return (
    <>
      {isAuth?(<Button bg='none'  _hover={{ color: 'green.400' }}  _active={{ bg: 'none',}} onClick={handleLogOut}>Log Out</Button>):(<Button bg='none' _active={{ bg: 'none',}} _hover={{ color: 'green.400' }} onClick={onOpen}>Sign In</Button>)}

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
                Sign In to Trouper
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
                    size="lg"
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
                    size="lg"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <Button
                    type="submit"
                    size="lg"
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
                    <Link color={"green"}>Forgot password?</Link>
                  </Stack>
                </FormControl>
                <Divider />
                <Flex fontSize="sm" mt="50px">
                  <Text mr="10px">Not a member yet?</Text>
                  <Link to='/signup' as={ReactLink} color="green">
                    Join now
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