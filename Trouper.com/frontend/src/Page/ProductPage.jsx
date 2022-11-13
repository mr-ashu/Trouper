import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Text,
  Stack,
  Img,
  Spacer,
  FormLabel,
  FormControl,
  Select,
  Button,
} from "@chakra-ui/react";

import React from "react";
import React, { useEffect } from "react";
import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Text,
  Stack,
  Img,
  Spacer,
  FormLabel,
  FormControl,
  Select,
  Button,
} from "@chakra-ui/react";

const getApiData = (url) => {
  return fetch(url).then((res) => res.json());
};
function ProductPage() {
  const [showData, setShowData] = useState([]);
  useEffect(() => {
    getApiData().then((res) => {
      setShowData(res);
    });
  }, []);

  const x = () => {
    let filt = showData
      .filter((el) => (el.category = "developer"))
      .map((el) => {
        setShowData();
      });
  };

  return (
    <>
      <SimpleGrid
        minChildWidth="250px"
        spacing="20px"
        width="70%"
        ml="320px"
        mt="-400px"
      >
        {foundation &&
          foundation.map((elem, index) => (
            <Stack textAlign="center" key={index}>
              <Box>
                <Img src={elem.image} />
                <Text color="green" fontWeight="700" fontSize="13px">
                  {" "}
                  {elem.mode}{" "}
                </Text>
                <Text fontWeight="750" fontSize="14px">
                  {" "}
                  {elem.brand}{" "}
                </Text>
                <Text> {elem.name} </Text>
                <Text> {`Rs ${elem.price}`} </Text>
                <Text> {elem.offer} </Text>
                <Button width="150px" height="30px" color="skyblue">
                  Cart
                </Button>
              </Box>
            </Stack>
          ))}
      </SimpleGrid>
    </>
  );
}

export default ProductPage;
