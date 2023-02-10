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
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import style from "./dashboard.module.css"
const initialFormData = {
  name: "",

  profilePic: "",
  about: "",
  searchTag: "",
  language: "",
  occupation: "",
  title: "",
  category: "",
  price: "",
  description: "",
  Image: "",
};
export default function AdminForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [pid, setpId] = useState("");

  const navigate = useNavigate();

  const { token, user } = useSelector((store) => store.auth);
 
 
  const handleFormData = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios
        .post(`https://trouper-org.onrender.com/products`, formData)
        .then((res) => {
          setpId(res.data._id);
          alert("sucess")
        });

      setFormData(initialFormData);



      
    } catch (error) {
      alert("Something Error.");
    }
  };

  useEffect(() => {
    const payload = {
      product: pid,
    };
    console.log(payload)
    axios
      .post(`https://trouper-org.onrender.com/admincart`, payload, {
        headers: {
          token: token.token,
        },
      })
      .then((res) => {
        alert("Data added sucessfully");
        navigate("/dashboard");
        console.log(res.data);
      });
  }, []);

  return (
    <div
      className={style.frmdata}
    
    >
      <form
        onSubmit={handleSubmit}
        style={{
         
          margin: "auto",
        }}
      >
        <Stack
        
          style={{
            spacing: "20px",
            padding: "6px",
          }}
        >
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "2xl", sm: "3xl" }}
            padding="30px"
          >
            Become a Trouper.
          </Heading>

          <FormControl id="userName">
            <FormLabel>User Icon</FormLabel>
            <Stack direction={["column", "row"]} spacing={6}>
              <Center>
                <Avatar size="xl" src={formData.profilePic}>
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

          <FormControl id="userName">
            <FormLabel>User name</FormLabel>
            <Input
              name="name"
              value={formData.name}
              onChange={handleFormData}
              placeholder="UserName"
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              name="email"
              value={formData.email}
              onChange={handleFormData}
              placeholder="your-email@example.com"
              type="email"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Profile Pic</FormLabel>
            <Input
              name="profilePic"
              value={formData.profilePic}
              onChange={handleFormData}
              placeholder="Upload Profile pic url"
              type="url"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              value={formData.title}
              onChange={handleFormData}
              placeholder="Title"
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>

          <FormControl>
            <FormLabel> Select Category</FormLabel>
            <Select
              name="category"
              value={formData.category}
              onChange={handleFormData}
              placeholder="Select"
            >
              <option value="graphic & design">graphic & design</option>
              <option value="digital marketing">digital marketing</option>
              <option value="Writing & transition">Writing & transition</option>
              <option value="video animation">video animation</option>
              <option value="Music & audio">Music & audio</option>
              <option value="programming">programming</option>
              <option value="Business">Business</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Price</FormLabel>
            <Input
              name="price"
              value={formData.price}
              onChange={handleFormData}
              placeholder="Price"
              type="number"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input
              name="description"
              value={formData.description}
              onChange={handleFormData}
              height="150px"
              placeholder="Type some things"
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel>About</FormLabel>
            <Input
              name="about"
              value={formData.about}
              onChange={handleFormData}
              placeholder="Describe your self"
              type="text"
              height="100px"
            />
          </FormControl>

          <FormControl>
            <FormLabel> SearchTag</FormLabel>
            <Input
              name="searchTag"
              value={formData.searchTag}
              onChange={handleFormData}
              placeholder="Enter Search tag"
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Language</FormLabel>
            <Input
              name="language"
              value={formData.language}
              onChange={handleFormData}
              placeholder="Your language"
              type="text"
            />
          </FormControl>

          <FormControl>
            <FormLabel> Occuption</FormLabel>
            <Input
              name="occupation"
              value={formData.occupation}
              onChange={handleFormData}
              placeholder="Enter your occuption"
              type="text"
            />
          </FormControl>

          <FormControl>
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
          <Stack
            paddingTop="20px"
            alignItems="center"
            textAlign="center"
            justifyContent="center"
            spacing={6}
            direction={["column", "row"]}
          >
            <Button
              type="submit"
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Submit
            </Button>

            <Link to="/dashboard">
              <Button
                alignSelf="center"
                bg={"pink.400"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
              >
                Go To DashBoard
              </Button>
            </Link>
          </Stack>

          <Stack
            spacing={6}
            direction={["column", "row"]}
            margin="20px"
          ></Stack>
        </Stack>
      </form>
    </div>
  );
}
