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
        bgGradient={["linear(to-b, gray.600, gray.800)"]}
        boxShadow="dark-lg"
        color="whiteAlpha.900"
        p={{ lg: "20", base: "4" }}
        rounded="2xl"
        pt="20"
        pb={{ lg: "0.5", md: "1", base: "1" }}
        data-aos="flip-left"
      >
        <Text
          fontSize={{ base: 14, md: 16, lg: 18 }}
          textAlign={{ lg: "justify", md: "justify", base: "left" }}
          marginBottom="10%"
        >
          My name is Sourav Paul, and I’m a MERN Stack Developer from
          Jamshedpur, Jharkhand, with 2 years of experience in building scalable
          web applications, integrating APIs, and developing real-time
          solutions. I have worked on projects like a Bulk Messaging Platform,
          Interactive Client Dashboards, Chatbots, and the Heyhomie Website &
          App, helping small businesses streamline their operations. I
          specialize in React.js, Next.js, Node.js, Express.js, MongoDB, Redux,
          and API Orchestration, and I’m passionate about creating
          high-performance, user-friendly solutions that drive business growth.
          I strongly believe in continuous learning, always exploring emerging
          web technologies and upgrading my skills to stay ahead. Beyond coding,
          I love traveling, exploring new places. As a developer, my curiosity
          and hunger for learning keep pushing me to centralize my skills for
          the growth of both the organization I work with and my own career.
        </Text>
      </Box>
    </Box>
  );
}

export default About;
