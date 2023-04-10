import { Box, Flex, Grid, Img, Text, Image } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect/dist/core";
import { motion } from "framer-motion";

function Profile() {
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
    <Box id="profile">
      <Grid
        w={{ base: "100%", md: "80%", lg: "80%" }}
        templateColumns={{ md: "1fr", lg: "1fr 1fr" }}
        m="85px auto 300px"
        pt={100}
        opacity={0.9}
        marginBottom="6%"
        as={motion.div}
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Box
          p={10}
          w={{ md: "100%", lg: "100%", base: "100%" }}
          as={motion.div}
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Text
            fontWeight={500}
            fontSize={{ base: "30px", md: "35px", lg: "40px" }}
          >
            Hi , I'm <span /* style={{ color: "blue" }} */>Sourav Paul </span>
          </Text>
          <Text
            fontWeight={500}
            fontSize={{ base: "25px", md: "35px", lg: "40px" }}
          >
            a <span id="typer" /* style={{ color: "blue" }} */></span>
          </Text>
          <Text fontSize={20}>From Jamshedpur, Jharkhand.</Text>
          <Text
            fontSize={18}
            textAlign={{ lg: "justify", sm: "left", base: "left" }}
          >
            Passionate about implementing new ideas in reality. I'm working on
            my skills and learning new technologies. Strong creative and
            analytical skills. Team player with an eye for detail.{" "}
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
              _hover={{ bg: "#0a1a54", fontWeight: "bold", fontSize: "18px" }}
            >
              <Img src="./download.png" w={10} h={10} mr={2} />
              Resume
            </Flex>
          </a>
        </Box>
        <Flex justifyContent={"center"} alignItems="center" wrap="wrap-reverse">
          <Box
            w={{ lg: 380, md: 380, sm: 380, base: "90%" }}
            h={380}
            as={motion.div}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="./Sourav.png"
              alt="Sourav Paul"
              w={{ lg: 400, md: 400, sm: 400, base: "100%" }}
              h={{ lg: 380 }}
              p="2"
            />
          </Box>
        </Flex>
      </Grid>
    </Box>
  );
}

export default Profile;
