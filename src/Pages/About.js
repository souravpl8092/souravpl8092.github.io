import { Box,  Heading, Text } from '@chakra-ui/react'
import React from 'react'

function About() {
  return (
    <Box  m='100px 0  0' id='about'  margin="auto" marginTop="4" >
      <Heading textAlign={'center'} style={{color:'#C8DA47'}} marginTop="7%">About Me</Heading>
      <Box w={{base:'90%',md:'80%',lg:'70%'}} m="40px auto 0" lineHeight={{base:'7',md:'10'}} backgroundColor="#1f1f33" boxShadow='dark-lg' p='20' rounded='2xl' pt="20" pb="1">
      <Text fontSize={{base:16,md:18,lg:20}} textAlign={'justify'} fontFamily='cursive' marginBottom="10%">
      My name's Sourav Paul. I'm a full-stack web-developer based in Masai School, Benguluru.

I love exploring new technologies in the field of Web Development and always try to adapt to it. I believe in the concept of continuous learning by regularly upgrading my skills and enhancing my knowledge. I have learned MERN stack, data structures, algorithms, and soft skills at Masai School.And besides coding, I love traveling and exploring new places As a developer, my hunger for learning has drastically increased. And I want to centralize my skills and learning for enhancement of an organization and more of it, to enhance my career.
        </Text>
    

      </Box>
    </Box>
  )
}

export default About
