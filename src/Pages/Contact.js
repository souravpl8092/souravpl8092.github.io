import {
  Box,
  Container,
  Flex,
  Heading,
  Img,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";

function Contact() {
  return (
    <Box m="100px 0  0" id="contact" pb={100}>
      <Heading textAlign={"center"} style={{ color: "#C8DA47" }}>
        Contact Me
      </Heading>

      <Container
        m="80px auto 0"
        border="2px solid white"
        borderRadius={10}
        p={10}
        boxShadow="dark-lg"
        rounded="xl"
        backgroundColor="#1f1f33"
      >
        <Text fontSize={{ base: 16, md: 18, lg: 20 }} fontFamily="cursive">
          <span>Email : </span> souravpl8092@gmail.com
        </Text>
        <Text fontSize={{ base: 16, md: 18, lg: 20 }} fontFamily="cursive">
          <span>Phone : </span> +91 7903472818
        </Text>
        <Flex alignItems={"center"}>
          <Text fontSize={{ base: 16, md: 18, lg: 20 }} fontFamily="cursive">
            <span>Github : </span>{" "}
            <Link href="https://github.com/souravpl8092" target="blank">
              souravpl8092
            </Link>
          </Text>
          <Link href="https://github.com/souravpl8092" target="blank">
            <Img
              width={5}
              ml="4"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
          </Link>
        </Flex>
        <Flex alignItems={"center"}>
          <Text fontSize={{ base: 16, md: 18, lg: 20 }} fontFamily="cursive">
            <span>LinkedIn : </span>{" "}
            <a
              href="https://www.linkedin.com/in/sourav-paul-276ba323a/"
              target="blank"
            >
              sourav-paul-276ba323a
            </a>
          </Text>
          <a
            href="https://www.linkedin.com/in/sourav-paul-276ba323a/"
            target="blank"
          >
            <Img
              width={5}
              ml="4"
              src="https://cdn-icons-png.flaticon.com/512/1419/1419653.png"
            />
          </a>
        </Flex>
      </Container>
      <Box m="auto" textAlign="center" fontSize="20px" mt="8" mb="-20">
        {" "}
        <Text fontSize={{ base: 14, md: 18, lg: 20 }} fontFamily="cursive">
          Made by Sourav Paul
        </Text>
      </Box>
    </Box>
  );
}

export default Contact;
