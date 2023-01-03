import { Flex, Img, Spacer } from "@chakra-ui/react";
import React from "react";
import Menus from "./Menus";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <Flex
      gap={4}
      px={{ base: 4, md: 6 }}
      alignItems="center"
      className="navbar"
    >
      <Link to="home">
        <Img
          w="300px"
          cursor={"pointer"}
          src="https://i.imgur.com/uVs6lHR.png"
          p="5"
        />
      </Link>
      <Spacer />
      <Flex
        gap={{ base: 5, md: 3, lg: 8 }}
        wrap="wrap"
        justifyContent={"flex-end"}
        display={{ base: "none", lg: "inherit" }}
      >
        <Flex gap={{ base: 5, md: 2, lg: 8 }} p={4}>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className="btn">Home</button>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className="btn">About</button>
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className="btn">Projects</button>
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className="btn">Skills</button>
          </Link>
          <a
            target={"blank"}
            href="https://drive.google.com/file/d/1BtlCp0aiUlaiP5yReW94bd1zuMLCXAFW/view?usp=sharing"
          >
            <button className="btn">Resume</button>
          </a>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className="btn">Contact</button>
          </Link>
        </Flex>
      </Flex>
      <Menus />
    </Flex>
  );
}

export default Navbar;
