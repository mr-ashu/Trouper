import React from "react";
import styles from "../../Page/SinglePro/Overview.module.css";
import { Box, Heading, Container, useColorModeValue } from "@chakra-ui/react";

import TypeOfServiceTable from "./TypeOfServiceTable";
const colors = [
  {
    id: 1,
    img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/154324211/original/b16ad8daa6dc6665f7743d3de87ee968392a4834/design-professional-flyer-postcard-brochure-design-in-8-hours-8b76.jpg",
  },
  {
    id: 2,
    img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/154324211/original/85fa6dba164dad9847b47e3408c4dabd464b20c3/design-professional-flyer-postcard-brochure-design-in-8-hours-8b76.jpg",
  },
  {
    id: 3,
    img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/154324211/original/acfdae2ac300503818c45f0c18fec39e3a0d1421/design-professional-flyer-postcard-brochure-design-in-8-hours-8b76.jpg",
  },
  {
    id: 4,
    img: "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/eb79eed59d56a7c459f62c423e6fe3ae-1667982466/Flyer-Mockup/design-professional-flyer-postcard-brochure-design-in-8-hours-8b76.jpg",
  },

  {
    id: 5,
    img: "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c6fc31889fabee257908f4add1188a0d-1667966527/flyer%20mockup/design-professional-flyer-postcard-brochure-design-in-8-hours-8b76.png",
  },
];
const delay = 2500;

function OverviewSlid({ title, price, rtig, occupation, id }) {
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
      <Container maxW={"7xl"} p="8">
        <Heading as="h1" mt={-10}>
          {" "}
          {title}
        </Heading>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
          justifyContent="space-between"
          // border="2px solid black"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
            // border="4px solid red"
          >
            <Box
              width="100%"
              zIndex="2"
              // marginLeft={{ base: '0', sm: '5%' }}
              margin="auto"
              // border="2px solid green"
            >
              <Box className={styles.slideshow}>
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
                      className={`slideshowDot${
                        index === idx ? " active" : ""
                      }`}
                      onClick={() => {
                        setIndex(idx);
                      }}
                    ></div>
                  ))}
                </div>
              </Box>
            </Box>

            <Box
              zIndex="1"
              width="100%"
              position="absolute"
              height="100%"
              // border="4px solid yellow"
            >
              <Box
                bgGradient={useColorModeValue(
                  "radial(orange.600 1px, transparent 1px)",
                  "radial(orange.300 1px, transparent 1px)"
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>

          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            width={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}
            marginTop={{ base: "3", sm: "0" }}
            // border="4px solid purple"
          >
            <Box width="100%">
              <TypeOfServiceTable
                p={price}
                rtig={rtig}
                occupation={occupation}
                id={id}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default OverviewSlid;
