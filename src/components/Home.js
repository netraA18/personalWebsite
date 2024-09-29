import React from "react";
import AnimatedText from "../animations/animateText";
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

import { useState } from "react";


function Home() {
    const [text, setText] = useState("Hello, I'm Netra Amin - Welcome to My Portfolio!");  
   
 
    return (
        <div>
            <Box textAlign="center" fontSize='50px' fontFamily='Poppins, sans-serif' boxShadow="sm" // You can use "sm", "md", "lg", "xl" for predefined shadows
            textShadow="2px 2px 4px rgba(122, 231, 240, 0.7)"> 

                <AnimatedText textInput={text}/>
            </Box>
            

            <HStack spacing="150px" marginTop={100} marginLeft={50} alignItems="flex-start"> 
                <VStack spacing="50px">
                    <Button colorScheme="blue" w='150px' h='70px'>Resume</Button>
                    <Button colorScheme="blue" w='150px' h='70px'>LinkedIn</Button>
                    <Button colorScheme="blue" w='150px' h='70px'>Github</Button>
                </VStack>
                
                <Text as="b">
                    Hello, I'm Netra Amin
                </Text>
            </HStack>
           

          
            
            {/* <Grid templateColumns='repeat(3, 1fr)' gap={6} marginTop={100}>
                <Box textAlign="left">
                <VStack spacing="50px">
                    <Button colorScheme="blue" w='150px' h='50px'>Resume</Button>
                    <Button colorScheme="blue" w='150px' h='50px'>LinkedIn</Button>
                    <Button colorScheme="blue" w='150px' h='50px'>Github</Button>
                </VStack>
                </Box>
            </Grid> */}
            
        </div>

            
           

           
      
      
      
    )

    
}

export default Home;