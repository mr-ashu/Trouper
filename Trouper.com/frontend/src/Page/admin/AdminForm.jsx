import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    Select,
  } from '@chakra-ui/react';
  import { SmallCloseIcon } from '@chakra-ui/icons';
import SelectInput from '@mui/material/Select/SelectInput';
  
  export default function AdminForm() {
    
    const handelchange=()=>{
          
    }
    
    
    
    
    return (
      <div style={{width:"90%",margin:"auto"}}>

    
      <div
      style={{
          width:"100%",margin:"auto"
      }}>
        <div
     style={{
        spacing:"20px",padding:"6px"
      }}
        >
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
             Become a Trouper.
          </Heading>
          <FormControl id="userName">
            <FormLabel>User Icon</FormLabel>
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar size="xl" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQis2IgRU0q8AEceyDOrUK8K-x7MAiHc1kOHHGAWcg&s">
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                  />
                </Avatar>
              </Center>
              <Center w="full">
                <Button w="full" >Change Icon</Button>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="userName" isRequired>
            <FormLabel>User name</FormLabel>
            <Input
              placeholder="UserName"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl  isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
               
              type="email"
            />
          </FormControl>
          <FormControl   >
            <FormLabel>profile pic</FormLabel>
            <Input
              placeholder="Upload Profile pic"
              
              type="file"
            />
          </FormControl>
          
          <FormControl  isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="Title"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
 
          <FormControl  isRequired>
            <FormLabel> Select Category</FormLabel>
             <Select placeholder='Select'>
            <option value='developer'>Option 1</option>
            <option value=''>Option 2</option>
            <option value= "">Option 3</option>
            <option value=''>Option 2</option>
            <option value= "">Option 3</option>
            <option value=''>Option 2</option>
            <option value= "">Option 3</option>
            <option value=''>Option 2</option>
            
             </Select>
          </FormControl>
          <FormControl  isRequired>
            <FormLabel>Price</FormLabel>
            <Input
              placeholder="Price"
              
              type="number"
            />
          </FormControl>
          
          <FormControl   isRequired>
            <FormLabel>Description</FormLabel>
            <Input
                 height="150px"
                placeholder='Type some things'
              type="text"
            />
          </FormControl>
          <FormControl   isRequired>
            <FormLabel>About</FormLabel>
            <Input
              placeholder='Describe your self'
              type="text"
              height="100px"
            />
          </FormControl>
          
          <FormControl  isRequired>
            <FormLabel> SearchTag</FormLabel>
            <Input
              placeholder="Enter Search tag"
             
              type="text"
            />
          </FormControl>
          <FormControl   isRequired>
            <FormLabel>Language</FormLabel>
            <Input
              placeholder="Your language"
               
              type="text"
            />
          </FormControl>
          
          <FormControl  isRequired>
            <FormLabel> Occuption</FormLabel>
            <Input
              placeholder="Enter your occuption"
            
              type="text"
            />
          </FormControl>
          
          <FormControl   isRequired>
            <FormLabel>Image</FormLabel>
            <Input
              placeholder="Enter image url"
               
              type="url"
            />
          </FormControl>








          {/* ---------------- */}
          <Stack spacing={6} direction={['column', 'row']} margin="20px">
            <Button
              bg={'red.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'red.500',
              }}>
              Cancel
            </Button>
            <Button
              bg={'blue.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'blue.500',
              }}>
              Submit
            </Button>
          </Stack>
        </div>
      </div>
      </div>
    );
  }

