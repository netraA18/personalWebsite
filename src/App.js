import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';



function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Box p={5}>   
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" 
            element={<Projects />}
            
             />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
