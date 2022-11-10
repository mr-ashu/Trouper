import { Box, Button, Heading, Img } from "@chakra-ui/react";
//import styles from "../SinglePage/AboutTheSeller.module.css";
import styles from "../SinglePro/AboutTheSeller.module.css";
function AboutTheSeller() {
  return (
    <>
      <Box>
        <Box textAlign="start">
          <Heading as="h5" size="sm">
            About The Seller
          </Heading>
        </Box>
        <Box className={styles.aboutMainCont}>
          <Box>
            <Img
              className={styles.Avatar}
              src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/ca87fd1f4523f84409582747332ff0f6-1585028299550/aa3dc23c-9409-464d-8782-8ce0c180e411.PNG"
              alt="profilePic"
            />
          </Box>
          <Box>
            {/* name */}
            <h4>kasun_zte</h4>
            <p>4.9 (6,096)</p>
            <Button
              w={[90, 140, 200, 280]}
              border="1px solid black"
              color="darkgrey"
              backgroundColor="none"
            >
              Contact Me
            </Button>
          </Box>
        </Box>

        {/* //////////////////// */}
        <Box>
          <Box className={styles.serviceInfo}>
            {/* 1st two */}
            <Box>
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
        </Box>
      </Box>
    </>
  );
}

export default AboutTheSeller;
