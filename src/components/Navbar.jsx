import { Flex,HStack,Heading, Spacer,Box, Text,Button } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  return (
    <Flex as='nav' p='10px' alignItems='center'>
        <Heading as='h1'>Task</Heading>
        <Spacer />

        <HStack spacing='50px'>
          <Box bg='gray.200' p='10px'> M</Box>
          <Text>someone@gmail.com</Text>
          <Button colorScheme='purple'>Logout</Button>
        </HStack>
    </Flex>
  )
}