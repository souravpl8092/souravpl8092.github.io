import React, { useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import "aos/dist/aos.css";
import AOS from "aos";

function Experience() {
  useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);

  return (
    <Box id="about" m="100px 0  0" margin="auto" marginTop="4">
      <Heading textAlign={"center"} style={{ color: "white" }} marginTop="7%">
        Professional Experience
      </Heading>

      <Box
        w={{ base: "90%", md: "80%", lg: "70%" }}
        m="40px auto 0"
        lineHeight={{ base: "7", md: "10" }}
        bg="blackAlpha.500, gray"
        bgGradient={["linear(to-b, gray.600, gray.800)"]}
        boxShadow="dark-lg"
        color="whiteAlpha.900"
        p={{ lg: "20", base: "4" }}
        rounded="2xl"
        pt="20"
        pb={{ lg: "0.5", md: "1", base: "1" }}
        data-aos="flip-left"
      >
        <Text
          fontSize={{ base: 14, md: 16, lg: 18 }}
          textAlign="justify"
          mb="6"
          fontWeight="700"
        >
          Application Specialist
          <br />
          <Text as="span" fontStyle="italic">
            Homepreneur Solutions Pvt. Ltd., Bengaluru | July 2023 – July 2025
          </Text>
        </Text>

        <Text
          fontSize={{ base: 14, md: 16, lg: 18 }}
          textAlign="justify"
          mb="4"
        >
          • Developed and maintained an API Orchestrator platform to efficiently
          manage and integrate multiple service endpoints, streamlining
          communication between systems.
        </Text>

        <Text
          fontSize={{ base: 14, md: 16, lg: 18 }}
          textAlign="justify"
          mb="4"
        >
          • Contributed to the Heyhomie Website & App, a platform enabling
          home-based food entrepreneurs to manage menus, orders, and
          customers—similar to Zomato/Swiggy but tailored for small businesses.
        </Text>

        <Text
          fontSize={{ base: 14, md: 16, lg: 18 }}
          textAlign="justify"
          mb="4"
        >
          • Built a Bulk WhatsApp Messaging Platform for promotional and
          transactional campaigns to 1K–5K recipients with features like
          scheduling, delivery reports, and real-time analytics.
        </Text>

        <Text
          fontSize={{ base: 14, md: 16, lg: 18 }}
          textAlign="justify"
          mb="4"
        >
          • Designed and developed Interactive Client Dashboards to visualize
          sales trends, product performance, and customer behavior, empowering
          data-driven decision-making.
        </Text>

        <Text
          fontSize={{ base: 14, md: 16, lg: 18 }}
          textAlign="justify"
          marginBottom="10%"
        >
          • Integrated Custom Chatbots to automate customer engagement, generate
          leads, and boost client sales.
        </Text>
      </Box>
    </Box>
  );
}

export default Experience;
