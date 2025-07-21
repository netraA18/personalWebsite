import React from 'react';
import { Text, Code, HStack, VStack, Card, Grid, Heading, Image, CardBody, Stack, Divider} from '@chakra-ui/react';
import {List, ListItem} from '@chakra-ui/react';
import { ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import WeatherChef from '../WeatherChef.png';
import lyricsCard from '../lyricsCard.png';
import itunesGallery from '../itunesGallery.png';
// import flappy from '../flappySS.png';
// import todoSS from '../todoSS.png';
// import brickBreaker from '../brickbreaker.png';
import microblogging_platform from '../microblogging_platform.png';
import business_health from '../business_health.png';
import medElly from '../medElly.png';

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
      onClick={() => window.open(props.projLink)}
      
      borderRadius='lg' 
    
  border='1px solid white' 
  boxShadow='0px 0px 10px rgba(255, 255, 255, 0.5)' 

    

    />
   
    <Stack mt='6' spacing='3' >
      <Heading size='md' color='Yellow'>{props.title}</Heading>
      <Text fontSize="13px">
        
    
        {words.map((word, index) => {          
          const highlightedWord = props.wordToHighlight.find((currentWord) => currentWord === word);
          
          if (highlightedWord) {            
            return (          
              <React.Fragment>
              <Code colorScheme='teal' as='b' fontSize="12px" bg='teal.700'  >{word}</Code>{' '}
              </React.Fragment>                            
              );            
          }                 
          return (
            <span  style={{fontWeight: 'bold', fontSize: '14px'}}key={index}>{word} </span>
          );
        })}

  
      </Text>
      <VStack align="start">
        <List spacing = {3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon}color='green.300' />
          <Code colorScheme='pink' as='b' fontSize="13px" children={props.language} />
        </ListItem>
        <ListItem>
          {props.design != null ?
            <div>
          <ListIcon as={CheckCircleIcon}color='green.300' />
          <Code colorScheme='pink' as='b' fontSize="13px" children={props.design} /> </div>: ""}
      
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

       {title: "Microblogging Platform", description: "Collaborated in a team to develop a full-stack microblogging web application usingSpring Boot and a MySQL backend. Built features including user authentication, posting with hashtags, following users, liking/commenting/bookmarking posts, profile views, hashtag search, and more", language: "MySQL, Spring Boot, Docker, Maven", wordToHighlight: ['full-stack', 'users,', 'authentication,', 'search,'], image: microblogging_platform, projLink: 'dd'},
        {title: "Business Health", description: "Collaborated in a team to develop a full-stack web application offer access to financial data and user-contributed reviews for publicly traded companies. Displays net margin, quick ratio, and other key metrics. Shows a list of alumni from that company. ", language: "Next.js, Tailwind, Firebase", wordToHighlight: ['financial', 'companies.', 'net', 'margin,', 'alumni'], image: business_health, projLink: 'https://swe-rosy.vercel.app/'},
        {title: "MedElly", description: "MedElly is a personalized music therapy platform that helps individuals through frequency-based music, since studies show that music at specific frequencies can aid memory recall. ", language: "Typescript, Howler.js, Next.js, and Auth0", wordToHighlight: ['frequency-based', 'music,'], image: medElly, projLink: 'https://devpost.com/software/uga-hacks-x'},
            {title: "Weather Chef", description: "Developed a dynamic web application integrating recipe search and weather-based recipe recommendations. Implemented RESTful JSON APIs for seamless data retrieval. Provides ingredients, videos, and instructions.", language:"Javascript (React.js)", design:"HTML, CSS, and MaterialUI", wordToHighlight: ['dynamic', 'APIs', 'integrating', 'videos,'], image: WeatherChef, projLink: 'https://weather-chef.vercel.app/'},
    {title: "Lyrics Card", description: "Initiated this project to address the gap in personalized lyric cards available online. Users can customize the text content, font styles, and colors on the canvas, as well as upload an image for the song cover to download the card!", language: "JavaScript (with Fabric.js)", design:"HTML and CSS", wordToHighlight: ['download', 'address', 'styles,', 'Initiated'], image: lyricsCard, projLink: 'https://lyrics-card.vercel.app/'},
    {title: "Itunes Gallery", 
      description:
       "Developed a JavaFX iTunes gallery app with search functionality and dynamic content display. " +
       "Implemented API integration for image retrieval and random image replacement playmode. " +
       "Managed UI components", language: "Java, JavaFX", wordToHighlight: ['JavaFX','search','API', 'random','UI', 'play', 'retrieval'], image: itunesGallery, projLink: 'https://github.com/netraA18/ItunesGallery'},

   // {title: "Flappy Bird", description: "Experimented in Processing software, implementing mechanics like collision detection and player controls through object oriented programming", language:"JavaScript", wordToHighlight: ['Processing', 'software,', 'player' , 'controls'], image: flappy, projLink: 'https://github.com/netraA18/FlappyBird'},
   // {title: "ToDoList", description:"Developed a Java-based command line ToDo List program that enables users to enter tasks, view all tasks, and update items flexibly. ", language: "Java", wordToHighlight:['command', 'line', 'update', 'view', 'enter'], image: todoSS, projLink: 'https://github.com/netraA18/ToDoList'},
   // {title: "Brick Breaker", description: "Developed an engaging Brick Breaker game using Processing dynamic ball physics and colorful graphics. Implemented user controls for an intuitive gaming experience, enhancing programming skills and knowledge of game design principles.", language: "JavaScript", wordToHighlight:['dynamic', 'graphics.', 'game', 'design'], image: brickBreaker, projLink: 'https://github.com/netraA18/BrickBreaker'}
  ];

  return (
    <div>
      <VStack>
      <Code colorScheme='pink' fontSize="35px" children="Projects" />
      <HStack>
      <Grid
  templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']}
  gap={6}
  marginTop={10}
>
  {data.map((item, index) => (
    <Cards
      key={index}
      title={item.title}
      description={item.description}
      language={item.language}
      design={item.design}
      wordToHighlight={item.wordToHighlight}
      image={item.image}
      projLink={item.projLink}
    />
  ))}
</Grid>

      </HStack>
      
      </VStack>
</div>
  )
}
export default Projects