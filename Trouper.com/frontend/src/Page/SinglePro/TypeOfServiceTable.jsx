import React from 'react'
import { Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Box,} from"@chakra-ui/react"
  import styles from "../../Page/SinglePro/TypeOfServiceTable.module.css";
import { Link, Navigate } from 'react-router-dom';
function TypeOfServiceTable({p , rtig ,occupation,id}) {
  return (
    <>
     <Tabs>
            <TabList display="flex" justifyContent="space-evenly" className={styles.navServiceTable}  >
              <Tab>Basic</Tab>
              <Tab>Standard</Tab>
              <Tab>Premium</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                {/* <p>₹857</p> */}

                <div>
                  <Box className={styles.row} mt={[2, 4, 6, 8]}>
                    <h1>{p}</h1>
                    <p>{`Save up to ${rtig}% with Subscribe to Save`}</p>
                  </Box>

                  <Box className={styles.row} mt={[2, 4, 6, 8]}>
                    <p>
                      Basic Package Basic Flyer, Poster, Banner Designs (only
                      one side) JPG Printable files
                    </p>
                  </Box>

                  <Box className={styles.rowThird} mt={[2, 4, 6, 8]}>
                    <div>1 Day Delivery</div>
                    <div>Unlimited Revisions</div>
                  </Box>

                  <Box className={styles.row} mt={[2, 4, 6, 8]}>
                    <li>{occupation}</li>
                    <li>Include Source File</li>
                    <li>Front & back design</li>
                    <li>Social Media Design</li>
                    <li>Commercial Use</li>
                  </Box>
                  <Link 
                   to={`/payment/${id}`}
                  
                  >
                    <Button   
                    colorScheme="whatsapp"
                    w={[90, 140, 200, 280]}
                    mt={[2, 4, 6, 8]}>
                        Continue
                    </Button>
                  
                  </Link>
                </div>
              </TabPanel>
              <TabPanel>
                {/* <p>two!</p> */}
                <div>
                  <Box className={styles.row} mt={[2, 4, 6, 8]}>
                    <h1>₹1,713</h1>
                    <p>Save up to 15% with Subscribe to Save</p>
                  </Box>

                  <Box className={styles.row} mt={[2, 4, 6, 8]}>
                    <p>
                     { `${occupation}Basic Package Basic Flyer, Poster, Banner Designs (only
                      one side) JPG Printable files`}
                    </p>
                  </Box>

                  <Box className={styles.rowThird} mt={[2, 4, 6, 8]}>
                    <div>1 Day Delivery</div>
                    <div>Unlimited Revisions</div>
                  </Box>

                  <Box className={styles.row} mt={[2, 4, 6, 8]}>
                    <li>Files Ready for Print</li>
                    <li>Include Source File</li>
                    <li>Front & back design</li>
                    <li>Social Media Design</li>
                    <li>Commercial Use</li>
                  </Box>

                  <Link 
                   to={`/payment/${id}`}
                  
                  >
                    <Button   
                    colorScheme="whatsapp"
                    w={[90, 140, 200, 280]}
                    mt={[2, 4, 6, 8]}>
                        Continue
                    </Button>
                  
                  </Link>
                </div>
              </TabPanel>
              <TabPanel>
                {/* <p>three!</p> */}
                <div>
                  <Box className={styles.row} mt={[2, 4, 6, 8]}>
                    <h1>₹5,138</h1>
                    <p>Save up to 18% with Subscribe to Save</p>
                  </Box>

                  <Box className={styles.row} mt={[2, 4, 6, 8]}>
                    <p>
                      Basic Package Basic Flyer, Poster, Banner Designs (only
                      one side) JPG Printable files
                    </p>
                  </Box>

                  <Box className={styles.rowThird} mt={[2, 4, 6, 8]}>
                    <div>1 Day Delivery</div>
                    <div>Unlimited Revisions</div>
                  </Box>

                  <Box className={styles.row} mt={[2, 4, 6, 8]}>
                    <li>Files Ready for Print</li>
                    <li>Include Source File</li>
                    <li>Front & back design</li>
                    <li>Social Media Design</li>
                    <li>Commercial Use</li>
                  </Box>

                  <Link 
                   to={`/payment/${id}`}
                  
                  >
                    <Button   
                    colorScheme="whatsapp"
                    w={[90, 140, 200, 280]}
                    mt={[2, 4, 6, 8]}>
                        Continue
                    </Button>
                  
                  </Link>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
    </>
  )
}

export default TypeOfServiceTable