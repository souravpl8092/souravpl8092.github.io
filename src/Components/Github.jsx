import { Box, Flex, Grid, Heading, Img } from "@chakra-ui/react";
import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";

function Github() {
  useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);
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
    <Box
      as={motion.div}
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Heading textAlign={"center"} mt={40}>
        Git Statistics
      </Heading>
      <br />
      <br />
      <Grid
        w={"80%"}
        m="40px auto"
        justifyContent={"center"}
        as={motion.div}
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Img
          className="git"
          src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=souravpl8092&&theme=radical"
        />
        <br />

        <GitHubCalendar
          username="souravpl8092"
          blockSize={20}
          blockMargin={5}
          color={"#20FF32"}
        />
        <br />
        <Flex
          wrap="wrap"
          mb="2"
          as={motion.div}
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Img
            className="git"
            src="https://github-readme-stats.vercel.app/api?username=souravpl8092&show_icons=true&theme=radical"
          />
          <Img
            className="git"
            src="https://github-readme-streak-stats.herokuapp.com/?user=souravpl8092&theme=radical"
            alt="souravpl8092"
          />
        </Flex>
        <Box></Box>
        <Box
          as={motion.div}
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Img
            className="git"
            src="https://github-profile-trophy.vercel.app/?username=souravpl8092&column=8&theme=radical"
            alt="souravpl8092"
            mb="2"
          />
        </Box>
        <Box
          as={motion.div}
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Img
            className="git"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=souravpl8092&layout=compact&theme=radical"
          />
        </Box>
      </Grid>
    </Box>
  );
}

export default Github;
