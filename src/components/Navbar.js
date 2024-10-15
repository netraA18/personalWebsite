import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, Spacer, Tab, Tabs, TabList} from '@chakra-ui/react';



/**
 * The Navbar component renders a navigation bar with links to the Home, Projects, and Contact pages.
 * It also includes a ColorModeSwitcher component to toggle between light and dark mode.
 * The background color is set to purple.700 and the text color is set to white.
 * The component is a Flex container with a spacer in between the heading and the tabs.
 * The tabs are rendered as links with a hover effect that changes the background color to purple.600 and the text color to white.
 * The selected tab has a background color of teal.400 and a text color of white.
 */
function Navbar() {
  return (
    <Box bg="purple.700" p={4}>
      <Flex alignItems="center">
        <Heading as="h1" size="lg" color="white">
        
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
