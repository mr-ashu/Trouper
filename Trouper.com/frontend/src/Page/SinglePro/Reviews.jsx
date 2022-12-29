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
function Reviews({rat}) {

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <>
      <Box
        // border="2px solid red"
        w={{ md: "50%", lg: "55%", xl: "61%" }}
        // ml="25px"
        ml={{ md: "25px", lg: "25px", xl: "25px" }}
        id="reviews"
        className={styles.rDiv}
      >
        <Box textAlign="start" mb={4}>
          <Heading as="h5" size="lg" ml="15px" >
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
                  value={getRandomInt(200)}
                  h="15px"
                  borderRadius="10px"
                  colorScheme="yellow"
                />
              </Td>
              <Td>{getRandomInt(200)}</Td>
            </Tr>
            <Tr class="hotel_b">
              <Td>4 Stars</Td>
              <Td>
                <Progress
                  value={getRandomInt(150)}
                  h="15px"
                  borderRadius="10px"
                  colorScheme="yellow"
                />
              </Td>
              <Td>{getRandomInt(150)}</Td>
            </Tr>
            <Tr class="hotel_c">
              <Td>3 Stars</Td>
              <Td>
                <Progress
                  value={getRandomInt(100)}
                  h="15px"
                  borderRadius="10px"
                  colorScheme="yellow"
                />
              </Td>
              <Td>{getRandomInt(100)}</Td>
            </Tr>
            <Tr class="hotel_d">
              <Td>2 Stars</Td>
              <Td>
                <Progress
                  value={getRandomInt(60)}
                  h="15px"
                  borderRadius="10px"
                  colorScheme="yellow"
                />
              </Td>
              <Td>{getRandomInt(60)}</Td>
            </Tr>
            <Tr class="hotel_e">
              <Td>1 Stars</Td>
              <Td>
                <Progress
                  value={getRandomInt(40)}
                  h="15px"
                  borderRadius="10px"
                  colorScheme="yellow"
                />
              </Td>
              <Td>{getRandomInt(40)}</Td>
            </Tr>
          </tbody>
        </Table>
      </Box>
    </>
  );
}

export default Reviews;
