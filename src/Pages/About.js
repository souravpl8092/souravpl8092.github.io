import React, { useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import "aos/dist/aos.css";
import AOS from "aos";

function About() {
  useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);

  return (
    <Box id="about" m="100px 0  0" margin="auto" marginTop="4">
      <Heading textAlign={"center"} style={{ color: "white" }} marginTop="7%">
        About Me
      </Heading>

      <Box
        w={{ base: "90%", md: "80%", lg: "70%" }}
        m="40px auto 0"
        lineHeight={{ base: "7", md: "10" }}
        bg="blackAlpha.500, gray"
        bgGradient={["linear(to-b, gray.600, gray.900)"]}
        boxShadow="dark-lg"
        color="whiteAlpha.900"
        p={{ lg: "20", base: "4" }}
        rounded="2xl"
        pt="20"
        pb={{ lg: "0.5", md: "1", base: "1" }}
        data-aos="flip-left"
      >
        <Text
          fontSize={{ base: 16, md: 18, lg: 20 }}
          textAlign={{ lg: "justify", md: "justify", base: "left" }}
          marginBottom="10%"
        >
          My name's Sourav Paul. I'm a full-stack web developer based in Masai
          School, Bengaluru. I love exploring new technologies in the field of
          Web Development and always try to adapt to them. I believe in the
          concept of continuous learning by regularly upgrading my skills and
          enhancing my knowledge. I have learned MERN stack, data structures,
          algorithms, and soft skills at Masai School. And besides coding, I
          love traveling and exploring new places. As a developer, my hunger for
          learning has drastically increased. And I want to centralize my skills
          and learning for the enhancement of an organization and more of it, to
          enhance my career.
        </Text>
      </Box>
    </Box>
  );
}

export default About;
