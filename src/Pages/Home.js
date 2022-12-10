import { Box, Flex, Grid, Img, Text, Divider, Image } from "@chakra-ui/react";
import React from "react";
import About from "../Pages/About";
import Typewriter from "typewriter-effect/dist/core";
import Project from "./Project";
import Github from "../Components/Github";
import Skills from "./Skills";
import Contact from "./Contact";

function Home() {
  const typeWriter = () => {
    const type = new Typewriter("#typer", {
      loop: true,
      delay: 105,
    });
    type
      .typeString("Web Developer")
      .pauseFor(2000)
      .deleteAll()
      .typeString("Software Engineer")
      .pauseFor(2000)
      .deleteAll()
      .typeString("Full Stack Developer")
      .pauseFor(2000)
      .deleteAll()
      .start();
  };

  React.useEffect(() => {
    typeWriter();
  }, []);

  return (
    <>
      <Grid
        w={{ base: "100%", md: "80%" }}
        id="profile"
        templateColumns={{ md: "1fr", lg: "1fr 1fr" }}
        m="85px auto 300px"
        pt={100}
        opacity={0.9}
        marginBottom="12%"
      >
        <Box p={10} minW={{ md: "100%", lg: "500px" }}>
          <Text
            fontWeight={500}
            fontSize={{ base: "30px", md: "35px", lg: "40px" }}
          >
            Hi , I'm <span style={{ color: "#C8DA47" }}>Sourav Paul </span>
          </Text>
          <Text
            fontWeight={500}
            fontSize={{ base: "25px", md: "35px", lg: "40px" }}
          >
            a <span style={{ color: "#C8DA47" }} id="typer"></span>
          </Text>
          <Text fontSize={20}>From Jamshedpur, Jharkhand.</Text>
          <Text fontSize={18}>
            Passionate about implementing new ideas in reality.I'm working on my
            skills and learning new technologies.Strong creative and analytical
            skills. Team player with an eye for detail.{" "}
          </Text>
          <br />
          <a href="./Sourav-Paul-Resume.pdf" download>
            <Flex
              w={"200px"}
              gap={2}
              my="4"
              p={2}
              borderRadius={"2xl"}
              fontSize="20px"
              alignItems="center"
              justifyContent={"center"}
              className="downloadbtn"
            >
              <Img
                src="https://i.ibb.co/MRdbgtQ/download.png"
                w={10}
                h={10}
                mr={2}
              />
              Resume
            </Flex>
          </a>
        </Box>
        <Flex justifyContent={"center"} alignItems="center" maxW={400} m="auto">
          <Image
            src="https://i.imgur.com/6OjfgMC.png"
            alt="Sourav Paul"
            width={{
              xs: "7em",
              sm: "25em",
              md: "40em",
              lg: "65em",
              xl: "75em",
            }}
          />
        </Flex>
      </Grid>
      <Divider />
      <Divider />
      <hr />
      <About />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Divider />
      <Divider />
      <hr />
      <Project />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Divider />
      <Divider />
      <hr />
      <Skills />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Divider />
      <Divider />
      <hr />
      <Github />
      <br />
      <br />
      <Divider />
      <Divider />
      <hr />
      <Contact />
    </>
  );
}

export default Home;
