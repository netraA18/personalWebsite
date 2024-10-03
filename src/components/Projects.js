import React, { useEffect } from 'react';
import { Text, Code, HStack, VStack, Card, CardHeader, Flex, Avatar, Box, Heading, IconButton, Image, CardFooter, Button, CardBody, Stack, Divider, ButtonGroup } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import WeatherChef from '../WeatherChef.png';


function Cards(props) {

  const string = props.description;
  const words = string.split(" ");

  //maybe can use useEffect for the wordToHighlight? 
  //so everytime wordToHiglight changes, it calls the code thing??
 
  return (
  <Card maxW='xs' 
  // // background="rgba(0, 0, 0, 0.3)"
  boxShadow="0px 4px 6px rgba(0, 255, 255, 0.6)"  // Dark shadow
  background="rgba(0, 10, 108, 0.1)"  
 
   >
  <CardBody>
    <Image
      src={WeatherChef}
      borderRadius='lg'         // Keeps the rounded corners
  border='1px solid white'  // Adds a solid white border
  boxShadow='0px 0px 10px rgba(255, 255, 255, 0.5)' 

    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{props.title}</Heading>
      <Text fontSize="13px">

        {words.map((word, index) => {          
          const highlightedWord = props.wordToHighlight.find((currentWord) => currentWord === word);

          if (highlightedWord) {
            return (
              <Code colorScheme='teal' as='b' fontSize="11px" >{word}</Code>
              );
          }
          return (
            <span key={index}>{word} </span>
          );
        })}


        
        
       

        
      
      </Text>
      <VStack align="start">
      <Code colorScheme='pink' as='b' fontSize="11px" children={props.language} />
      <Code colorScheme='pink' as='b' fontSize="11px" children={props.design} />
      
      </VStack>
      
    </Stack>
  </CardBody>
  <Divider />
  
</Card>
  );
  

}
function Projects() {

 
  

  const data = [
    {title: "Weather Chef", description: "Developed a dynamic web application integrating recipe search and weather-based recipe recommendations. Implemented RESTful JSON APIs for seamless data retrieval.", language:"Javascript (React.js)", design:"HTML, CSS, and MaterialUI", wordToHighlight: ['dynamic', 'APIs']},
    {title: "Lyrics Card", description: "Features: customize the text content, font styles, and colors on the canvas, as well as upload an image for the song cover to download the card! Initiated this project to address the gap in personalized lyric cards available online.", language: "JavaScript (with Fabric.js)", design:"HTML and CSS", wordToHighlight: ['download', 'address', 'styles,']},
    
  ];


  return (
    <div>
      <VStack>
      <Code colorScheme='pink' fontSize="35px" children="Projects" />
      <HStack>

        {data.map((item, index) => (
          <Cards key={index} title={item.title} description={item.description} language={item.language} design={item.design} wordToHighlight={item.wordToHighlight}/>
        ))}


      </HStack>
      </VStack>
   

</div>
  )
}

export default Projects