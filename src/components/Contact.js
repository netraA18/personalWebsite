import React from 'react'
import emailjs from '@emailjs/browser'
import { useState } from 'react'


import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input, Textarea, Button, Box, HStack, VStack, Stack, Code,

} from '@chakra-ui/react'

import { Text } from '@chakra-ui/react'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');  
  const [alert, showAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_vdh2b9q';
    const templateId = 'template_a32r6ob';
    const publicKey = 'i1UedIQ38NRQQxIHU';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Netra',
      message: message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log("Email sent successfully!", response);
      setName('');
      setEmail('');
      setMessage('');
      showAlert(true);
    })
    .catch((error) => {
      console.log("Error sending email:", error)
  })

  
  console.log("showAlert is" + alert);
  
  }

  
  return (
    <div>
   


   
    <Box p={5}>
      
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
        <Code colorScheme='teal' as="center" fontSize="35px" children="Contact Form" />
          <FormControl>
            <FormLabel>Enter your Name</FormLabel>
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outline" 
            />
         
          
            <FormLabel>Enter your Email</FormLabel>
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outline"
            />
         
          
            <Text mb="8px">Message:</Text>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message!"
              size="sm"
              variant="outline" 
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" mt={4} alignSelf="flex-start">
            Submit
          </Button>
          
        </VStack>
      </form>
    </Box>
    {alert ? <p>Hello</p> : null}

    
    
    </div>


   
  
  )
}

export default Contact