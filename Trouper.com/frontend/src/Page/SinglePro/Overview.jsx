import React from "react";
import styles from "../../Page/SinglePro/Overview.module.css";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Box,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList
} from "@chakra-ui/react";
const colors = [
  {
    id: 1,
    img:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/154324211/original/b16ad8daa6dc6665f7743d3de87ee968392a4834/design-professional-flyer-postcard-brochure-design-in-8-hours-8b76.jpg"
  },
  {
    id: 2,
    img:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/154324211/original/85fa6dba164dad9847b47e3408c4dabd464b20c3/design-professional-flyer-postcard-brochure-design-in-8-hours-8b76.jpg"
  },
  {
    id: 3,
    img:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/154324211/original/acfdae2ac300503818c45f0c18fec39e3a0d1421/design-professional-flyer-postcard-brochure-design-in-8-hours-8b76.jpg"
  },
  {
    id: 4,
    img:
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/eb79eed59d56a7c459f62c423e6fe3ae-1667982466/Flyer-Mockup/design-professional-flyer-postcard-brochure-design-in-8-hours-8b76.jpg"
  },

  {
    id: 5,
    img:
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c6fc31889fabee257908f4add1188a0d-1667966527/flyer%20mockup/design-professional-flyer-postcard-brochure-design-in-8-hours-8b76.png"
  }
];
const delay = 2500;

function OverviewSlid() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <Box className={styles.mainCont} ml={{ base: '-10px', md: '-89px', lg: '-85px' , xl:"-52px" }}  id="overview" >
        <Box className={styles.slideshow} w={{ base: '30%', md: '50%', lg: '55%' , xl:"61%" }} h={{ base: '200px', md: '300px', lg: '400px' , xl:"500px" }} >
          <div
            className={styles.slideshowSlider}
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {colors.map((elem) => (
              <div className={styles.slide} key={elem.id}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src={elem.img}
                  alt={elem.id}
                />
              </div>
            ))}
          </div>

          <div className={styles.slideshowDots}>
            {colors.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </Box>

        <Box className={styles.checkCard}   h={{ base: '200px', md: '300px', lg: '400px' , xl:"500px" }} >
          <Tabs>
            <TabList display="flex" justifyContent="space-evenly">
              <Tab>Basic</Tab>
              <Tab>Standard</Tab>
              <Tab>Premium</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                {/* <p>₹857</p> */}

                <div>
                  <Box className={styles.row} mt={[2, 4, 6, 8]}>
                    <h1>₹857</h1>
                    <p>Save up to 15% with Subscribe to Save</p>
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

                  <Button
                    colorScheme="whatsapp"
                    w={[90, 140, 200, 280]}
                    mt={[2, 4, 6, 8]}
                  >
                    Continue
                  </Button>
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

                  <Button
                    colorScheme="whatsapp"
                    w={[90, 140, 200, 280]}
                    mt={[2, 4, 6, 8]}
                  >
                    Continue
                  </Button>
                </div>
              </TabPanel>
              <TabPanel>
                {/* <p>three!</p> */}
                <div>
                  <Box className={styles.row} mt={[2, 4, 6, 8]}>
                    <h1>₹5,138</h1>
                    <p>Save up to 15% with Subscribe to Save</p>
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

                  <Button
                    colorScheme="whatsapp"
                    w={[90, 140, 200, 280]}
                    mt={[2, 4, 6, 8]}
                  >
                    Continue
                  </Button>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
}

export default OverviewSlid;

/* list modification

                   <List spacing={3}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Assumenda, quia temporibus eveniet a libero incidunt suscipit
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
  {/* You can also use custom icons from react-icons */
//   <ListItem>
//     <ListIcon as={MdSettings} color='green.500' />
//     Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
//   </ListItem>
// </List>
