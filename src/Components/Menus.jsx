import {
  Box,
  Img,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";
function Menus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1BtlCp0aiUlaiP5yReW94bd1zuMLCXAFW/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        display={{ sm: "inherit", lg: "none" }}
        variant="ghost"
        borderRadius={5}
        aria-label="Courses"
        fontWeight="normal"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        bg="#2739a3"
        p={2}
        mr={6}
      >
        <Img
          w={6}
          src="https://www.clipartmax.com/png/full/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png"
        />
      </MenuButton>
      <MenuList
        p={4}
        border="none"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        bg="#2739a3"
      >
        <Box textAlign={"left"}>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Text
              p={2}
              fontWeight={600}
              fontSize="xl"
              _hover={{
                borderRadius: "5px",
                bg: "gray.100",
                color: "red",
                cursor: "pointer",
              }}
              mx={3}
            >
              Home
            </Text>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Text
              p={2}
              fontWeight={600}
              fontSize="xl"
              _hover={{
                borderRadius: "5px",
                bg: "gray.100",
                color: "red",
                cursor: "pointer",
              }}
              mx={3}
            >
              About
            </Text>
          </Link>
          
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Text
              p={2}
              fontWeight={600}
              fontSize="xl"
              _hover={{
                borderRadius: "5px",
                bg: "gray.100",
                color: "red",
                cursor: "pointer",
              }}
              mx={3}
            >
              Projects
            </Text>
          </Link>
          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Text
              p={2}
              fontWeight={600}
              fontSize="xl"
              _hover={{
                borderRadius: "5px",
                bg: "gray.100",
                color: "red",
                cursor: "pointer",
              }}
              mx={3}
            >
              Skills
            </Text>
          </Link>
          <a href="./fw20_0372-Sourav-Paul-Resume.pdf" download>
            <Text
              onClick={handleClick}
              p={2}
              fontWeight={600}
              fontSize="xl"
              _hover={{
                borderRadius: "5px",
                bg: "gray.100",
                color: "red",
                cursor: "pointer",
              }}
              mx={3}
            >
              Resume
            </Text>
          </a>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Text
              p={2}
              fontWeight={600}
              fontSize="xl"
              _hover={{
                borderRadius: "5px",
                bg: "gray.100",
                color: "red",
                cursor: "pointer",
              }}
              mx={3}
            >
              Contact
            </Text>
          </Link>
        </Box>
      </MenuList>
    </Menu>
  );
}

export default Menus;
