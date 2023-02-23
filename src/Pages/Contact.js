import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import React from "react";
import { motion } from "framer-motion";

function Contact() {
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
    <Box m="100px 0  0" id="contact">
      <Container
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
        as={motion.div}
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Flex>
          <Box
            bgGradient={[
              "linear(to-tr, gray.700, gray.200)",
              "linear(to-b, gray.600, gray.900)",
            ]}
            boxShadow="dark-lg"
            color="white"
            borderRadius="2xl"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Heading textAlign={"center"}>Contact Me</Heading>
            <br />
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Text
                      mt={{ sm: 3, md: 3, lg: 5 }}
                      color="gray.500"
                      fontSize="20"
                    >
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack
                        pl={0}
                        spacing={3}
                        alignItems="flex-start"
                        m="left"
                      >
                        <Button
                          size="md"
                          height="48px"
                          width="218px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid blackAlpha.400" }}
                          leftIcon={<MdEmail color="#DCE2FF" size="20px" />}
                        >
                          souravpl8092@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="145px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid blackAlpha.400" }}
                          leftIcon={<MdPhone color="#DCE2FF" size="20px" />}
                        >
                          +91-7903472818
                        </Button>
                        <a
                          href="https://github.com/souravpl8092"
                          target="blank"
                        >
                          <Button
                            size="md"
                            height="48px"
                            width="130px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ fontSize: "14" }}
                            leftIcon={<BsGithub color="#DCE2FF" size="20px" />}
                          >
                            souravpl8092
                          </Button>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/sourav-paul-276ba323a/"
                          target="blank"
                        >
                          <Button
                            size="md"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ fontSize: "14" }}
                            leftIcon={
                              <BsLinkedin color="#DCE2FF" size="20px" />
                            }
                          >
                            sourav-paul-276ba323a
                          </Button>
                        </a>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={10} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input
                              type="text"
                              size="md"
                              placeholder="Enter Your Name Please"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input
                              type="text"
                              size="md"
                              placeholder="Enter Your E-mail Please "
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="Enter Your Message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="linear-gradient(to right bottom, #293dbc, #0a1a54)"
                            color="white"
                            _hover={{
                              bg: "#0a1a54",
                              fontWeight: "bold",
                              fontSize: "14px",
                            }}
                          >
                            Let's talk
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
      <Box m="auto" textAlign="center" fontSize="20px" mt="8" mb="-20">
        {" "}
        <Text
          fontSize={{ base: 14, md: 18, lg: 20 }}
          pb="2%"
          fontFamily="cursive"
        >
          Made by Sourav Paul
        </Text>
      </Box>
    </Box>
  );
}

export default Contact;
