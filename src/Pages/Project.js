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
import { motion } from "framer-motion";

function Project() {
  const slideUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };
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
            /* background="#1f1f33" */
            /* border="2px solid black" */
            borderRadius="2xl"
            fontSize="14px"
            /* _hover={{ transform: "scale(1.1)" }} */
            as={motion.div}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
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

/* ,
 {
    "name": "Reliance Digital",
    "desc": "Reliance Digital Retail Ltd. sells electronic products. The Company retails a wide variety of electronics including televisions, cameras, appliances, mobile phones, printers, and many more electronics. Reliance Digital retails electronics to customers throughout India.",
    "img": "https://i.imgur.com/e2wQozr.png",
    "git": "https://github.com/souravpl8092/Reliance-Digital",
    "deploy": "https://steady-medovik-4174ca.netlify.app/",
    "techStack": [
      {
        "name": "HTML",
        "img": "https://cdn-icons-png.flaticon.com/512/1532/1532556.png"
      },
      {
        "name": "CSS",
        "img": "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
      },
      {
        "name": "JavaScript",
        "img": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
      }
    ]
  },
  ,
  {
    "name": "Movies App",
    "desc": "Created movie app where user can get all movie details.",
    "img": "https://i.imgur.com/a5hswe4.png",
    "git": "https://github.com/souravpl8092/Movie-App",
    "deploy": "https://subtle-piroshki-c228de.netlify.app/",
    "techStack": [
      {
        "name": "HTML",
        "img": "https://cdn-icons-png.flaticon.com/512/1532/1532556.png"
      },
      {
        "name": "CSS",
        "img": "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
      },
      {
        "name": "JavaScript",
        "img": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
      }
    ]
    {
    "name": "Todo App",
    "desc": "ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules. We can add more tasks at any time and delete a task that is completed. ",
    "img": "https://i.imgur.com/m2CwgJk.png",
    "git": "https://github.com/souravpl8092/Todo-App",
    "deploy": "https://beautiful-tulumba-324758.netlify.app/",
    "techStack": [
      {
        "name": "React",
        "img": "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
      },
      {
        "name": "CSS",
        "img": "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
      },
      {
        "name": "JavaScript",
        "img": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
      }
    ]
  },
  {
    "name": "Toggl Track",
    "desc": "Toggl Track is a time tracking app that allows you to track your daily activities across different platforms; providing you with detailed insights and an opportunity to optimize your workflow by identifying areas where you can improve.",
    "img": "https://i.imgur.com/wax8PgG.png",
    "git": "https://github.com/YashSharma7746/Project",
    "deploy": "https://ubiquitous-figolla-cbd3f0.netlify.app/",
    "techStack": [
      {
        "name": "HTML",
        "img": "https://cdn-icons-png.flaticon.com/512/1532/1532556.png"
      },
      {
        "name": "CSS",
        "img": "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
      },
      {
        "name": "JavaScript",
        "img": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
      }
    ]
  },
  }*/
