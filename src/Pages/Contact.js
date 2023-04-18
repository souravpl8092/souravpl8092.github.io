import { useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

function Contact() {
  const toast = useToast();
  const [loading, setLoading] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [postAt, setPostAt] = useState("");
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const currentDate = `${day}-${month}-${year}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setPostAt(currentDate);
      if (name !== "" && mail !== "" && message !== "") {
        const payload = {
          name,
          mail,
          message,
          postAt,
        };

        const response = await fetch(
          "https://fair-red-anemone-yoke.cyclic.app/user",
          {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.status === 201) {
          setLoading(false);
          toast({
            title: "Thank You",
            description: "The form was submitted successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setName("");
          setMail("");
          setMessage("");
        } else {
          setLoading(false);
        }
      } else {
        setLoading(false);
        toast({
          title: "Please fill all mandatory field",
          status: "warning",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (error) {
      setLoading(false);
      console.log("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);

  return (
    <Box m="100px 0  0" id="contact">
      <Container
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="2000"
      >
        <Flex>
          <Box
            bgGradient={["linear(to-b, gray.600, gray.900)"]}
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
                          <FormLabel>
                            <Flex>
                              Your Name <Text color="red"> *</Text>
                            </Flex>
                          </FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input
                              type="text"
                              size="md"
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                              placeholder="Enter Your Name Please"
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>
                            <Flex>
                              Mail <Text color="red"> *</Text>
                            </Flex>
                          </FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input
                              type="text"
                              size="md"
                              onChange={(e) => setMail(e.target.value)}
                              value={mail}
                              placeholder="Enter Your E-mail Please "
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>
                            <Flex>
                              Message<Text color="red"> *</Text>
                            </Flex>
                          </FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            placeholder="Enter Your Message"
                          />
                        </FormControl>
                        {loading ? (
                          <Button
                            isLoading
                            loadingText="Submitting"
                            bg="linear-gradient(to right bottom, #293dbc, #0a1a54)"
                            color="white"
                            fontSize="lg"
                            px="8"
                            py="6"
                            w="100%"
                            borderRadius="lg"
                            variant="solid"
                          >
                            Submit
                          </Button>
                        ) : (
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
                              px="8"
                              py="6"
                              w="100%"
                              borderRadius="lg"
                              fontSize="lg"
                              onClick={handleSubmit}
                            >
                              Let's talk
                            </Button>
                          </FormControl>
                        )}
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
