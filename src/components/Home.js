import React, { useEffect } from "react";
import AnimatedText from "../animations/animateText";
import { motion } from "framer-motion";
import { Code } from "@chakra-ui/react";
import {
    ChakraProvider,
    Box,
    VStack,
    Grid,
    theme,
    Button,
    GridItem,
    HStack,
    Text
  } from '@chakra-ui/react';




function Home() {
    const MotionButton = motion(Button);
   
    const titleText = ("Hello, I'm Netra Amin - Welcome to My Portfolio!");
    const aboutMeText = "Hello, I'm Netra Amin, a sophomore at the University of Georgia majoring in computer science and pursing an applied data science certificate. " +
     "With a curious and creative mind, I've turned creative ideas into real-world projects using programming languages such as Java, Javascript, Python, and various framworks. " +
    "Looking ahead, I aspire to be a software enginner and create innovative solutions! Feel free to connect with me on LinkedIn or drop me an email! ";

    const handleLinkedinClick = (event) => {
        event.preventDefault();        
        window.open('https://www.linkedin.com/in/netra190/', "_blank");    
    }

    const handleResumeClick = (event) => {
        event.preventDefault();
        window.open('https://flowcv.com/resume/gopmehqsmn', "_blank");
    }

    const handleGithubClick = (event) => {
        event.preventDefault();
        window.open('https://github.com/netraA18', "_blank");
    }

    return (
        <div>
            <VStack>
            <Box textAlign="center" fontSize='55px' fontFamily='Poppins, sans-serif' boxShadow="sm" textShadow="3px 3px 5px rgba(10, 10, 10, 0.4)">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >                
                    <Text
                        bgGradient="radial(orange.300, pink.300, cyan.300, teal.300)"
                        bgClip="text"
                        color="transparent"
                    >
                        
                        <AnimatedText textInput={titleText} />
                    </Text>
                </motion.div>
            </Box>
            
        
            <HStack spacing="150px" marginTop={100} marginLeft={50} alignItems="flex-start"> 
                <VStack spacing="50px">
                
                <MotionButton
                    bgGradient="linear(to-r,  cyan.400, blue.600)"
                    _hover={{
                    bgGradient: "linear(to-r, blue.500, cyan.400)",
                    scale: 1.1, // Scale up by 10%
                    }}
                    transition="background-position 0.3s ease, transform 0.2s ease"
                    color="black"
                    w="150px"
                    h="70px"
                    whileHover={{ scale: 1.1 }} 
                    onClick={handleResumeClick}
                >
                    Resume
                </MotionButton>

                <MotionButton
                    bgGradient="linear(to-r, cyan.400, blue.600)"
                    _hover={{
                    bgGradient: "linear(to-r, blue.500, cyan.400)",
                    scale: 1.1, 
                    }}
                    transition="background-position 0.3s ease, transform 0.2s ease"
                    color="black"
                    w="150px"
                    h="70px"
                    whileHover={{ scale: 1.1 }} 
                    onClick={handleLinkedinClick}
                >
                    LinkedIn
                </MotionButton>

                <MotionButton
                    bgGradient="linear(to-r, cyan.400, blue.600)"
                    _hover={{
                    bgGradient: "linear(to-r, blue.500, cyan.400)",
                    scale: 1.1, // Scale up by 10%
                    }}
                    transition="background-position 0.3s ease, transform 0.2s ease"
                    color="black"
                    w="150px"
                    h="70px"
                    whileHover={{ scale: 1.1 }} 
                    onClick={handleGithubClick}
                >
                    Github
                </MotionButton>
                             

                </VStack>
                
                <Box w='800px' h='300px'>
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}                    
                >                
                    <Text as="b" fontSize={20} lineHeight="taller" color={"teal.100"}>
                        <AnimatedText textInput={aboutMeText} />
                    </Text>
                </motion.div>                
                </Box>

               
                
      
                
               
            </HStack> 

           
            </VStack>   
        </div>
        

            
           

           
      
      
      
    )

    
}

export default Home;