import React from 'react'
import { Link as ReactLink } from "react-router-dom";
import axios from "axios";
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
  Checkbox
} from "@chakra-ui/react";

const initialFormData = {
  email: "",
  password: "",
  remember: false
};

export default function Login() {
  const [formData, setFormData] = React.useState(initialFormData);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleChangeFormData = (e) => {
    const { type, checked, value, name } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };
  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://reqres.in/api/login`, {
        ...formData
      })
      .then((res) => {
        alert(`Hi! your token is ${res.data.token}`);
      })
      .catch((err) => {
        alert(`Please sign up first
                  or
            check your user id and password
      `);
      });
  };
  return (
    <>
      <Button onClick={onOpen}>Sign In</Button>

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
              <Heading as="h6" size="md">
                Sign In to Trouper
              </Heading>
            </ModalHeader>
          </Center>
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
                  <Link as={ReactLink} color="green">
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
