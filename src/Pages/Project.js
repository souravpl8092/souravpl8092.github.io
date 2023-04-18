import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Img,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { LinkIcon } from "@chakra-ui/icons";
import ProjectDb from "../projectDb.json";
import "aos/dist/aos.css";

function Project() {
  return (
    <Box mt={200} id="projects" marginBottom="-2%">
      <Heading textAlign={"center"} mt="-4%">
        My Projects
      </Heading>
      <br />
      {ProjectDb.map((project, index) => {
        return (
          <Grid
            w="80%"
            key={index}
            templateColumns={{ md: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
            gap={{ lg: "4" }}
            className="button"
            rounded="lg"
            p="5"
            m="80px auto"
            fontWeight="semibold"
            bgGradient={["linear(to-b, gray.600, gray.900)"]}
            boxShadow="dark-lg"
            color="whiteAlpha.900"
            borderRadius="2xl"
            fontSize="14px"
            /* _hover={{ transform: "scale(1.1)" }} */
            data-aos="zoom-in-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Grid>
              <Img
                src={project.img}
                align="center"
                borderRadius="10px 10px 0 0"
                border="1px solid black"
              />
              <Box>
                <Flex
                  justifyContent={"center"}
                  gap={4}
                  mb={{ md: "2", lg: "4" }}
                  mt={4}
                >
                  <Link href={project.git} target="blank">
                    <Button
                      color={"white"}
                      bg="linear-gradient(to right bottom, #293dbc, #0a1a54);"
                      _hover={{
                        bg: "#0a1a54",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      <Img src="./GitHub.png" w={6} mr={2} />
                      Github
                    </Button>
                  </Link>
                  <Link href={project.deploy} target="blank">
                    <Button
                      color={"white"}
                      bg="linear-gradient(to right bottom, #293dbc, #0a1a54);"
                      _hover={{
                        bg: "#0a1a54",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      <LinkIcon mr={2} />
                      Deployed
                    </Button>
                  </Link>
                </Flex>
              </Box>
            </Grid>
            <Grid p={4}>
              <Box mt={{ md: 0, lg: 4 }}>
                <Heading textAlign={"center"}>{project.name}</Heading>
                <Text
                  mt={4}
                  textAlign={{ lg: "justify", md: "left", base: "left" }}
                  fontSize={{ base: 14, md: 15, lg: 16 }}
                  mb={{ sm: 2, base: 2 }}
                >
                  {project.desc}
                </Text>
              </Box>
              <Box>
                <Text fontWeight={"bold"} fontSize="20">
                  Tech Stack
                </Text>
                <Flex wrap="wrap" w={{ base: "100%", md: "70%", lg: "70%" }}>
                  {project.techStack.map((tech, index) => {
                    return (
                      <Flex
                        key={index}
                        className="tech"
                        borderRadius={"30px"}
                        p="5px 10px"
                        m="1"
                        fontWeight="semibold"
                        fontSize="14px"
                        color="white"
                        transition="all 0.3s ease-in-out"
                        _hover={{ transform: "translateY(-8px)" }}
                      >
                        <Img src={tech.img} w="20px" h="20px" />
                        {tech.name}
                      </Flex>
                    );
                  })}
                </Flex>
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
}

export default Project;
