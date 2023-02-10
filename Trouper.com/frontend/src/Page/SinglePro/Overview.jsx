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
  UnorderedList,
  Heading
} from "@chakra-ui/react";
import TypeOfServiceTable from "./TypeOfServiceTable";
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

function OverviewSlid({title , price , rtig , occupation,id }) {
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
     <Box textAlign="start" className={styles.head} mb={4}  ml={{base : "12px" , md:"25px" , lg:"25px" ,xl: "25px" }}>
          <Heading as="h5" size="lg">
            {title}
          </Heading>
        </Box>
      <Box className={styles.mainCont} ml={{lg: '-85px' , xl:"-52px" }}  id="overview" >
      
        <Box className={styles.slideshow} w={{lg: '55%' , xl:"61%" }} h={{ base: '300px', md: '400px', lg: '500px' , xl:"550px" }} >
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

        <Box className={styles.checkCard}   h={{md: '300px', lg: '400px' , xl:"500px" }} >
          <TypeOfServiceTable p={price} rtig={rtig} occupation={occupation} id={id} />
        </Box>
      </Box>
    </>
  );
}

export default OverviewSlid;

 
