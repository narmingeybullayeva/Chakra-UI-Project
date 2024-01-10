import { UnlockIcon } from '@chakra-ui/icons';
import { Flex,HStack,Heading, Spacer,Box, Text,Button, useToast } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {

  const toast = useToast();

  const showToast = () => {
    toast({
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 5000,
      isClosable: true,
      status:'success',
      position: 'top',
      icon: <UnlockIcon />
    })
  }

  return (
    <Flex  as='nav' mb='40px' p='10px' alignItems='center'>
        <Heading as='h1'>Task</Heading>
        <Spacer />

        <HStack spacing='50px'>
          <Box bg='gray.200' p='10px'> M</Box>
          <Text>someone@gmail.com</Text>
          <Button colorScheme='purple' onClick={showToast}>Logout</Button>
        </HStack>
    </Flex>
  )
}
