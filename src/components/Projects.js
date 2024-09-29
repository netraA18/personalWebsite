import React from 'react';
import { Text, Code, HStack, VStack, Card, CardHeader, Flex, Avatar, Box, Heading, IconButton, Image, CardFooter, Button, CardBody, Stack, Divider, ButtonGroup } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import WeatherChef from '../WeatherChef.png';



function Projects() {
  return (
    <div>
      <VStack>
      <Code colorScheme='pink' fontSize="35px" children="Projects" />
      <HStack>
      <Card maxW='xs' >
  <CardBody>
    <Image
      src={WeatherChef}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Weather Chef</Heading>
      <Text fontSize="13px">
      Developed a <Code colorScheme='teal' as='b' fontSize="11px" children="dynamic" /> web application <Code colorScheme='teal' as='b' fontSize="11px" children="integrating" /> recipe search and weather-based recipe recommendations.
      Implemented <Code colorScheme='teal' as='b' fontSize="11px" children="RESTful JSON APIs" /> for seamless data retrieval.
      </Text>
      <VStack align="start">
      <Code colorScheme='pink' as='b' fontSize="11px" children="JavaScript (React.js)" />
      <Code colorScheme='pink' as='b' fontSize="11px" children="HTML and CSS" />
      <Code colorScheme='pink' as='b' fontSize="11px" children="MaterialUI" />
      </VStack>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='teal'>
        Like
      </Button>
      <Button variant='ghost' colorScheme='teal'>
        Comments
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
      </HStack>
      </VStack>
   

</div>
  )
}

export default Projects