import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Spacer, Tab, Tabs, TabList} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';


function Navbar() {
  return (
    <Box bg="purple.700" p={4}>
      <Flex alignItems="center">
        <Heading as="h1" size="lg" color="white">
        <ColorModeSwitcher justifySelf="flex-end" />
        </Heading>
        <Spacer />
        <Tabs variant='enclosed' colorScheme='cyan'>
        <TabList>
            <Link to="/" style={{ margin: '0 10px' }}>
              <Tab as="b" _hover={{ bg: "purple.600", color: "white" }} _selected={{ bg: "teal.400", color: "white" }}>
                Home
              </Tab>
            </Link>
            <Link to="/projects" style={{ margin: '0 10px' }}>
              <Tab as="b" _hover={{ bg: "purple.600", color: "white" }} _selected={{ bg: "teal.400", color: "white" }}>
                Projects
              </Tab>
            </Link>
            <Link to="/contact" style={{ margin: '0 10px' }}>
              <Tab as="b" _hover={{ bg: "purple.600", color: "white" }} _selected={{ bg: "teal.400", color: "white" }}>
                Contact
              </Tab>
            </Link>
          </TabList>  
        </Tabs>       
      </Flex>
    </Box>
  );
}

export default Navbar;
