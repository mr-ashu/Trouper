import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    Select,
    Alert,
  } from '@chakra-ui/react';
  import { SmallCloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
 
 
const initialFormData = {
 name: "",

 profilePic:"",
 about:"",
 searchTag:"",
 language:"",
 occupation:"",
 title:"",
 category:"",
 price:"",
 description:"",
 Image:""
 
};
  export default function AdminForm() {
    const [formData, setFormData] = useState(initialFormData);
 
 
  const dispatch = useDispatch();
  const nevigate=useNavigate()
  const handleFormData = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
 
       await axios.post(`http://localhost:9500/products`, formData)
      
      setFormData(initialFormData)
      alert("Form successfully added ")
       nevigate("/dashboard")
     
    } catch (error) {
      alert('Something Error.')
       
    }
   console.log(formData);
  }
    

  
    return (
      <div style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",width:"60%",margin:"auto",padding:"20px",marginTop:"20px"}}>

    
      <form
       onSubmit={handleSubmit}
      style={{
          width:"100%",margin:"auto"
      }}>
        <Stack
     style={{
        spacing:"20px",padding:"6px"
      }}
        >
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl'  } } padding="30px">
             Become a Trouper.
          </Heading>
        
           
           <FormControl id="userName">
           <FormLabel>User Icon</FormLabel>
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar  size="xl" src={formData.profilePic}>
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
          
             
            </Stack>
          </FormControl>
         
          <FormControl id="userName" >
            <FormLabel>User name</FormLabel>
            <Input
               name="name"
               value={formData.name}
              onChange={handleFormData}
              placeholder="UserName"
             
              type="text"
            />
          </FormControl>
          <FormControl  >
            <FormLabel>Email address</FormLabel>
            <Input
             name="email"
             value={formData.email}
             onChange={handleFormData}
              placeholder="your-email@example.com"
               
              type="email"
            />
          </FormControl>
          <FormControl   >
            <FormLabel>Profile Pic</FormLabel>
            <Input
              name="profilePic"
              value={formData.profilePic}
             onChange={handleFormData}
              placeholder="Upload Profile pic url"
              
              type="url"
            />
          </FormControl>
          
          <FormControl  >
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              value={formData.title}
             onChange={handleFormData}
              placeholder="Title"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
 
          <FormControl  >
            <FormLabel> Select Category</FormLabel>
             <Select  
              name="category"
              value={formData.category}
              onChange={handleFormData}
               placeholder='Select'>
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
          <FormControl  >
            <FormLabel>Price</FormLabel>
            <Input
              name="price"
              value={formData.price}
             onChange={handleFormData}
              placeholder="Price"
              
              type="number"
            />
          </FormControl>
          
          <FormControl   >
            <FormLabel>Description</FormLabel>
            <Input
                   name="description"
                   value={formData.description}
                  onChange={handleFormData}
                 height="150px"
                placeholder='Type some things'
              type="text"
            />
          </FormControl>
          <FormControl   >
            <FormLabel>About</FormLabel>
            <Input
             name="about"
             value={formData.about}
             onChange={handleFormData}
              placeholder='Describe your self'
              type="text"
              height="100px"
            />
          </FormControl>
          
          <FormControl  >
            <FormLabel> SearchTag</FormLabel>
            <Input
              name="searchTag"
              value={formData.searchTag}
             onChange={handleFormData}
              placeholder="Enter Search tag"
             
              type="text"
            />
          </FormControl>
          <FormControl   >
            <FormLabel>Language</FormLabel>
            <Input
              name="language"
              value={formData.language}
             onChange={handleFormData}
              placeholder="Your language"
               
              type="text"
            />
          </FormControl>
          
          <FormControl  >
            <FormLabel> Occuption</FormLabel>
            <Input
              name="occupation"
              value={formData.occupation}
             onChange={handleFormData}
              placeholder="Enter your occuption"
            
              type="text"
            />
          </FormControl>
          
          <FormControl   >
            <FormLabel>Image</FormLabel>
            <Input
              name="Image"
              value={formData.Image}
             onChange={handleFormData}
              placeholder="Enter image url"
               
              type="url"
            />
          </FormControl>
 
          {/* ---------------- */}
          <Stack spacing={6} direction={['column', 'row']} margin="20px">
             
            <Button
              marginTop="20px"
              type='submit'
              bg={'blue.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'blue.500'
                
              }}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </form>
      </div>
    );
  }

