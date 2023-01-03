import { Box, Flex, Grid, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
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
    img: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
  },
  {
    name: "MongoDB",
    img: "https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png",
  },
  {
    name: "Express",
    img: "https://miro.medium.com/max/1200/0*iechRr4efJARJmnK.jpg",
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
    img: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  {
    name: "Redux",
    img: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
  },
  {
    name: "Redux Thunk",
    img: "https://miro.medium.com/max/1400/1*5FcvZufrMDzs1ef63NjhXw.jpeg",
  },
];

let Tools = [
  {
    name: "Git",
    img: "https://cdn.iconscout.com/icon/free/png-512/git-226092.png",
  },
  {
    name: "Github",
    img: "https://cdn.iconscout.com/icon/free/png-512/github-153-675523.png",
  },
  {
    name: "Storybook",
    img: "https://i.imgur.com/YktgokE.png",
  },
  {
    name: "Netlify",
    img: "https://www.netlify.com/v3/img/components/logomark-dark.png",
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
    name: "Cypress",
    img: "https://www.opencodez.com/wp-content/uploads/2019/12/cypress-logo.png",
  },
  {
    name: "NPM",
    img: "https://cdn.worldvectorlogo.com/logos/npm-square-red-1.svg",
  },
];
function Skills() {
  return (
    <Box my="100" id="skills">
      <Heading textAlign={"center"} style={{ color: "#C8DA47" }}>
        My Skills
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={20}
        w={"80%"}
        m="100px auto"
      >
        {skills.map((skill, index) => {
          return (
            <Box key={index} className="skill" p={3} textAlign="center">
              <Flex
                direction={{ base: "column", xl: "row" }}
                alignItems={"center"}
                gap={4}
              >
                <Img src={skill.img} w={100} h={100} />
                <Text fontSize={20} fontWeight={500}>
                  {skill.name}
                </Text>
              </Flex>
            </Box>
          );
        })}
      </Grid>
      <br />
      <Heading textAlign={"center"} style={{ color: "#C8DA47" }}>
        Tools
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={20}
        w={"80%"}
        m="100px auto"
      >
        {Tools.map((skill, index) => {
          return (
            <Box key={index} className="skill" p={3} textAlign="center">
              <Flex
                direction={{ base: "column", xl: "row" }}
                alignItems={"center"}
                gap={4}
              >
                <Img src={skill.img} w={100} h={100} />
                <Text fontSize={20} fontWeight={500}>
                  {skill.name}
                </Text>
              </Flex>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Skills;
