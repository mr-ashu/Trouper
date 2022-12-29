import { Box, Button, Container, Heading, Img, Text } from "@chakra-ui/react";
//import styles from "../SinglePage/AboutTheSeller.module.css";
import styles from "../SinglePro/AboutTheSeller.module.css";
function AboutTheSeller({profilePic , name , rating , description}) {

  
  return (
    <>
      <Box
        // border="3px solid red"
       className={styles.AmainCont}
        w={{   md: "50%", lg: "55%", xl: "61%" }}
        // margin="auto"
        width="100%"
         ml={{md:"25px" , lg:"25px" ,xl: "25px" }}
        id="about"
      >
        <Box textAlign="start" className={styles.head} mb={4} >
          <Heading as="h5" size="lg">
            About The Seller
          </Heading>
        </Box>
        <Box className={styles.aboutMainCont}>
          <Box>
            <Img
              className={styles.Avatar}
              src={profilePic}
              alt="profilePic"
            />
          </Box>
          <Box>
            {/* name */}
            <h4>{name}</h4>
            <p>{rating} (6,096)</p>
            <Button
              w={[90, 140, 200, 280]}
             // border="1px solid black"
              color="darkgrey"
              backgroundColor="none"
            >
              Contact Me
            </Button>
          </Box>
        </Box>

        {/* //////////////////// */}
        <Box className={styles.inboxAbout} >
          <Box className={styles.serviceInfo} mt={[2, 4, 6, 8]} display="flex">
            {/* 1st two */}
            <Box gap="20px">
              <Box>
                <p>From</p>
                <p className={styles.dis}>Srilanka</p>
              </Box>
              <Box>
                <p>Avg. response time</p>
                <p className={styles.dis}>1 hour</p>
              </Box>
            </Box>
            {/* 2ndTwo */}
            <Box>
              <Box>
                <p>Member sinceFrom</p>
                <p className={styles.dis}>Mar 2020</p>
              </Box>
              <Box>
                <p>Last delivery</p>
                <p className={styles.dis}>about 1 hour</p>
              </Box>
            </Box>
          </Box>
          <Text fontSize="lg" textAlign="start" mt={[2, 4, 6, 8]} mb={[2, 4, 6, 8]} fontWeight="bold" ml="12px" >
            Hello!
          </Text>
          <Text noOfLines={[4, 3, 3, 2]} textAlign="start" ml="12px"  >
             {`I Am ${name} , ${description}`}
          </Text>
          <Text fontSize="lg" textAlign="start" mt={[2, 4, 6, 8]} ml="12px"  >
            Thank You.
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default AboutTheSeller;
