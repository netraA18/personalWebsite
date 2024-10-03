import React, { useEffect } from 'react';
import { Text, Code, HStack, VStack, Card, CardHeader, Flex, Avatar, Box, Heading, IconButton, Image, CardFooter, Button, CardBody, Stack, Divider, ButtonGroup } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import {List, ListItem} from '@chakra-ui/react';
import { ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import WeatherChef from '../WeatherChef.png';
import lyricsCard from '../lyricsCard.png';
import itunesGallery from '../itunesGallery.png';

function Cards(props) {

  const string = props.description;
  const words = string.split(" ");

  
  return (
  <Card maxW='xs'
  boxShadow="0px 4px 6px rgba(0, 255, 255, 0.6)" 
  background="rgba(0, 10, 108, 0.1)"  
 
   >
  <CardBody >
    <Image
      src={props.image}
      borderRadius='lg' 
    
  border='1px solid white' 
  boxShadow='0px 0px 10px rgba(255, 255, 255, 0.5)' 

    />
    <Stack mt='6' spacing='3' >
      <Heading size='md'>{props.title}</Heading>
      <Text fontSize="13px">

     
        {words.map((word, index) => {          
          const highlightedWord = props.wordToHighlight.find((currentWord) => currentWord === word);
          
          if (highlightedWord) {
            
            return (
             

              <React.Fragment>
              <Code colorScheme='teal' as='b' fontSize="11px" >{word}</Code>{' '}
              </React.Fragment>
              
              
              );

              
          }
          
         
          return (
            <span key={index}>{word} </span>
          );
        })}

  
      </Text>
      <VStack align="start">
        <List spacing = {3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon}color='green.300' />
          <Code colorScheme='pink' as='b' fontSize="11px" children={props.language} />
        </ListItem>
        <ListItem>
        <ListIcon as={CheckCircleIcon}color='green.300' />
          <Code colorScheme='pink' as='b' fontSize="11px" children={props.design} />
        </ListItem>
       
          
        </List>
      
      
      </VStack>
      
    </Stack>
  </CardBody>
  <Divider />
  
</Card>
  );
  

}
function Projects() {

  const data = [
    {title: "Weather Chef", description: "Developed a dynamic web application integrating recipe search and weather-based recipe recommendations. Implemented RESTful JSON APIs for seamless data retrieval.", language:"Javascript (React.js)", design:"HTML, CSS, and MaterialUI", wordToHighlight: ['dynamic', 'APIs'], image: WeatherChef},
    {title: "Lyrics Card", description: "Features: customize the text content, font styles, and colors on the canvas, as well as upload an image for the song cover to download the card! Initiated this project to address the gap in personalized lyric cards available online.", language: "JavaScript (with Fabric.js)", design:"HTML and CSS", wordToHighlight: ['download', 'address', 'styles,'], image: lyricsCard},
    {title: "Itunes Gallery", 
      description:
       "Developed a JavaFX iTunes gallery app with search functionality and dynamic content display. " +
       "Implemented API integration for image retrieval and random image replacement playmode. " +
       "Managed UI components", language: "Java, JavaFX", wordToHighlight: ['JavaFX','search','API', 'random','UI', 'play', 'retrieval'], image: itunesGallery},
    
  ];


  return (
    <div>
      <VStack>
      <Code colorScheme='pink' fontSize="35px" children="Projects" />
      <HStack>

        {data.map((item, index) => (
          <Cards key={index} title={item.title} description={item.description} language={item.language} design={item.design} wordToHighlight={item.wordToHighlight} image={item.image}/>
        ))}


      </HStack>
      </VStack>
   

</div>
  )
}

export default Projects