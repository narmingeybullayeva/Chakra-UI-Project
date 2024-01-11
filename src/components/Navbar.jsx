import { UnlockIcon } from '@chakra-ui/icons';
import { Flex,HStack,Heading, Spacer,Box, Text,Button, useToast, Avatar, AvatarBadge } from '@chakra-ui/react'
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
          <Avatar  src='/img/mario.png' >
            <AvatarBadge width='1.3em' bg='teal.500'> 
              <Text fontSize='xs' color='white'>3</Text>
            </AvatarBadge>
          </Avatar>
          <Text>someone@gmail.com</Text>
          <Button colorScheme='purple' onClick={showToast}>Logout</Button>
        </HStack>
    </Flex>
  )
}
