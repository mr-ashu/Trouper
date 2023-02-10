import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import MenuIcon from "@mui/icons-material/Menu";
import ShareIcon from "@mui/icons-material/Share";
// import styles from "../SinglePage/Nav.module.css"
import styles from "../../Page/SinglePro/Nav.module.css";
import { useState } from "react";
import AlertCom from "./AlertCom";
import { Link } from "react-scroll";

export default function Simple() {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeCount = () => {
    setLikeCount(likeCount + 1);
    // <AlertCom/>
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link to="reviews">Scroll</Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link to="overview">Overview</Link>
              <Link to="about">About the seller</Link>
              <Link to="reviews">Reviews</Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <div className={styles.likeCountDiv}>
                <button className={styles.likeIcon} onClick={handleLikeCount}>
                  {" "}
                  <AlertCom />{" "}
                </button>
                <div>
                  <div className={styles.countShowCont}>{likeCount}</div>
                </div>
              </div>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link to="overview">Overview</Link>
              <Link to="about">About the seller</Link>
              <Link to="reviews">Reviews</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
