import { Box, Grid, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
let skills = [
  {
    name: "HTML",
    img: "./HTML.png",
  },
  {
    name: "CSS",
    img: "./CSS.png",
  },
  {
    name: "JavaScript",
    img: "./javascript.png",
  },
  {
    name: "React",
    img: "./react.png",
  },
  {
    name: "NodeJs",
    img: "./node.png",
  },
  {
    name: "MongoDB",
    img: "./mongo.webp",
  },
  {
    name: "Express",
    img: "./express.png",
  },
  {
    name: "Mongoose",
    img: "./Mongoose.png",
  },
  {
    name: "Redux",
    img: "./redux.png",
  },
  {
    name: "Chakra UI",
    img: "./Chakra-UI.png",
  },
  {
    name: "REST API",
    img: "./Rest Api.png",
  },
  {
    name: "Bootstrap",
    img: "./Bootstrap.png",
  },
];

let Tools = [
  {
    name: "Git",
    img: "./Gits.png",
  },
  {
    name: "Github",
    img: "./GitHub.png",
  },
  {
    name: "Storybook",
    img: "./Story book.png",
  },
  {
    name: "Netlify",
    img: "./Netlify.png",
  },
  {
    name: "NPM",
    img: "./npm.png",
  },
  {
    name: "CodeSandbox",
    img: "./CodeSandbox.png",
  },
  {
    name: "Vercel",
    img: "./Vercel.ico",
  },
  {
    name: "Replit",
    img: "./Replit.png",
  },
  {
    name: "Postman",
    img: "./Postman.webp",
  },
  {
    name: "Thunder Client",
    img: "./Thunder-Client.jpg.png",
  },
  {
    name: "VS Code",
    img: "./VS Code.png",
  },
  {
    name: "Cyclic",
    img: "./Cyclic.png",
  },
];

function Skills() {
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
    <Box>
      <Box mb="10">
        <Box mt={100}>
          <Heading textAlign={"center"}>My Skills</Heading>
          <br />
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(4,1fr)",
            }}
            gap={20}
            w={"80%"}
            m="100px auto"
          >
            {skills.map((skill, index) => {
              return (
                <Box
                  key={index}
                  className="skill"
                  p={2}
                  textAlign="center"
                  border="2px solid white"
                  bg="blackAlpha.600"
                  color="whiteAlpha.900"
                  as={motion.div}
                  variants={slideUp}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Box
                    direction={{ base: "column", xl: "row" }}
                    alignItems={"center"}
                    m="auto"
                    textAlign="center"
                    gap={4}
                    bgGradient={[
                      "linear(to-tr, gray.700, gray.200)",
                      "linear(to-b, gray.600, gray.900)",
                    ]}
                    boxShadow="dark-lg"
                    color="whiteAlpha.900"
                    borderRadius="20px"
                  >
                    <Img src={skill.img} w={70} h={70} m="auto" />
                    <Text fontSize={21} fontWeight={500}>
                      {skill.name}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Grid>
          <br />
          <Heading textAlign={"center"}>Tools</Heading>
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(4,1fr)",
            }}
            gap={20}
            w={"80%"}
            m="100px auto"
          >
            {Tools.map((tools, index) => {
              return (
                <Box
                  key={index}
                  className="skill"
                  p={2}
                  textAlign="center"
                  border="2px solid white"
                  bg="blackAlpha.600"
                  color="whiteAlpha.900"
                  as={motion.div}
                  variants={slideUp}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Box
                    direction={{ base: "column", xl: "row" }}
                    alignItems={"center"}
                    m="auto"
                    textAlign="center"
                    gap={4}
                    bgGradient={[
                      "linear(to-tr, gray.700, gray.200)",
                      "linear(to-b, gray.600, gray.900)",
                    ]}
                    boxShadow="dark-lg"
                    color="whiteAlpha.900"
                    borderRadius="20px"
                  >
                    <Img src={tools.img} w={70} h={70} m="auto" />
                    <Text fontSize={21} fontWeight={500}>
                      {tools.name}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Skills;

/* "https://cdn-icons-png.flaticon.com/512/1532/1532556.png" */
