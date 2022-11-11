import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
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
  Box,
  Text,
  Link,
  Flex,
} from '@chakra-ui/react'

export default function SignUp() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

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
          <Stack direction='column' spacing={4} align='center'>
          <FormControl mt={4}>
              <Button
                  type='submit'
                  height='48px'
                  width='100%'
                  colorScheme='blue'
                  fontSize='md'
                >
                 
                    <Image ml={-5} mr={5} h='20px' w='20px' src='https://accounts.coschedule.com/img/sso-providers/Facebook.svg' />
                    <span>Continue with Facebook</span>
                 
                </Button>
            </FormControl>
          <FormControl mt={4}>
              <Button
                  type='submit'
                  height='48px'
                  width='100%'
                  variant='outline'
                  fontSize='md'
                >
                 
                    <Image ml={-5} mr={5} h='20px' w='20px' src='https://accounts.coschedule.com/img/sso-providers/Google.svg' />
                    <span>Continue with Google</span>
                 
                </Button>
            </FormControl>
          <FormControl mt={4}>
              <Button
                  type='submit'
                  height='48px'
                  width='100%'
                  variant='outline'
                  fontSize='md'
                >
                 
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
              <Input ref={initialRef} placeholder='Inter your Email' size='lg' />
            </FormControl>
            <FormControl mt={4}>
              <Button size='lg' width='100%' colorScheme='green'>
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}