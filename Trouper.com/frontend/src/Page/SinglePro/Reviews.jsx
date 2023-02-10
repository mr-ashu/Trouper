import React from "react";
import {
  Table,
  Thead,
 
  Tr,
  Th,
  Td,
 
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
function Reviews({ rat }) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <>
      <Box
        //  border="2px solid red"
        boxShadow="base"
        id="reviews"
        className={styles.rDiv}
        p={10}
        margin="auto"
      >
        <Box
          textAlign="start"
          mb={4}
          //  border="2px solid purple"
          p={2}
          boxShadow="outline"
        >
          <Heading as="h5" size="lg" ml="15px">
            5,698 Reviews
          </Heading>
        </Box>

        <Table className={styles.mainContReview} boxShadow="lg" gap={10}>
          <Thead>
            <Tr>
              <Th textAlign="center">Stars</Th>
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
