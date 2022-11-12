import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Img,
  Progress,
  Text,
} from "@chakra-ui/react";
import styles from "../SinglePro/Reviews.module.css";
function Reviews() {
  return (
    <>
      <Box
        // border="2px solid red"
        w={{ base: "30%", md: "50%", lg: "55%", xl: "61%" }}
        ml="25px"
        id="reviews"
      >
        <Box textAlign="start">
          <Heading as="h5" size="lg">
            5,698 Reviews
          </Heading>
        </Box>

        <Table className={styles.mainContReview}>
          <Thead>
            <Tr>
              <Th>Stars</Th>
              <Th>Range</Th>
              <Th>Crowd</Th>
            </Tr>
          </Thead>
          <tbody>
            <Tr class="hotel_a">
              <Td>5 Stars</Td>
              <Td>
                <Progress
                  value={90}
                  h="15px"
                  borderRadius="10px"
                  colorScheme="yellow"
                />
              </Td>
              <Td>(5420)</Td>
            </Tr>
            <Tr class="hotel_b">
              <Td>4 Stars</Td>
              <Td>
                <Progress
                  value={70}
                  h="15px"
                  borderRadius="10px"
                  colorScheme="yellow"
                />
              </Td>
              <Td>(194)</Td>
            </Tr>
            <Tr class="hotel_c">
              <Td>3 Stars</Td>
              <Td>
                <Progress
                  value={50}
                  h="15px"
                  borderRadius="10px"
                  colorScheme="yellow"
                />
              </Td>
              <Td>(46)</Td>
            </Tr>
            <Tr class="hotel_d">
              <Td>2 Stars</Td>
              <Td>
                <Progress
                  value={15}
                  h="15px"
                  borderRadius="10px"
                  colorScheme="yellow"
                />
              </Td>
              <Td>(26)</Td>
            </Tr>
            <Tr class="hotel_e">
              <Td>1 Stars</Td>
              <Td>
                <Progress
                  value={10}
                  h="15px"
                  borderRadius="10px"
                  colorScheme="yellow"
                />
              </Td>
              <Td>(10)</Td>
            </Tr>
          </tbody>
        </Table>
      </Box>
    </>
  );
}

export default Reviews;
