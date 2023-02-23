import { Box, Grid, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
let skills = [
  {
    name: "HTML",
    img: "https://cdn-icons-png.flaticon.com/512/1532/1532556.png",
  },
  {
    name: "CSS",
    img: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
  },
  {
    name: "JavaScript",
    img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
  },
  {
    name: "React",
    img: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
  },
  {
    name: "NodeJs",
    img: "https://nodejs.org/static/images/logo.svg",
  },
  {
    name: "MongoDB",
    img: "https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png",
  },
  {
    name: "Express",
    img: "https://i.imgur.com/jonx38t.png",
  },
  {
    name: "REST API",
    img: "https://miro.medium.com/max/300/1*1RDFnS8FgAOQFegtuynxWw.png",
  },
  {
    name: "Next.js",
    img: "https://i.imgur.com/8ZR96UA.png",
  },
  {
    name: "TypeScript",
    img: "https://i.imgur.com/T2ZnBHn.png",
  },
  {
    name: "Redux",
    img: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
  },
  {
    name: "Redux Thunk",
    img: "https://i.imgur.com/U9wVSoJ.png",
  },
];

let Tools = [
  {
    name: "Git",
    img: "https://raveenakale475.github.io/static/media/git.95e92c065c8ce5f9147a.png",
  },
  {
    name: "Github",
    img: "https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png",
  },
  {
    name: "Storybook",
    img: "https://i.imgur.com/YktgokE.png",
  },
  {
    name: "Netlify",
    img: "https://raveenakale475.github.io/static/media/netlify.ff9a6cf8b6be147ca675.png",
  },
  {
    name: "Chakra UI",
    img: "https://camo.githubusercontent.com/eec63163a5209f78e8b0e3d6ab82eb981d03c4453a7a466f4fdc063da09f2a4d/68747470733a2f2f692e696d6775722e636f6d2f454d796b5a62332e706e67",
  },
  {
    name: "React Testing",
    img: "https://testing-library.com/img/octopus-128x128.png",
  },
  {
    name: "Vercel",
    img: "https://raveenakale475.github.io/static/media/veercel.6d176e7fc85917a641d0.ico",
  },
  {
    name: "NPM",
    img: "https://cdn.worldvectorlogo.com/logos/npm-square-red-1.svg",
  },
  {
    name: "Postman",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
  },
  {
    name: "Thunder Client",
    img: "https://ph-files.imgix.net/3f458a19-f754-4e09-8aa5-351c3a45dc38.png?auto=format",
  },
  {
    name: "VS Code",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
  },
  {
    name: "Cyclic",
    img: "https://www.cyclic.sh/images/cyclic-logo.png",
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
