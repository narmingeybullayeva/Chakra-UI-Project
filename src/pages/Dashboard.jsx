import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import { Card,Box,useColorModeValue, CardBody, CardFooter, CardHeader, Flex, Heading, SimpleGrid,Text, HStack, Button, Divider, Avatar } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

function Dashboard() {

  const useTasks = useLoaderData()

  const [tasks, setTasks ] = useState(useTasks)

  const value = useColorModeValue('purple.400', 'purple.800')
  const cardBgColor = useColorModeValue('white', 'gray.700')
  return (
    <SimpleGrid  spacing={10} minChildWidth='300px'>
          {tasks && tasks.map(task => (
            <Card key={task.id} borderTop='8px' borderColor='purple.400' bg={cardBgColor}>
              <CardHeader>
                <Flex>
                  <Box w='50px' h='50px'>
                    <Avatar src={task.img} />
                  </Box>
                  <Box>
                    <Heading as='h3' size='sm'>{task.title}</Heading>
                    <Text>by {task.author}</Text>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody color='gray.500'><Text>{task.description}</Text></CardBody>
              <Divider borderColor='gray.200' />
              <CardFooter>
                <HStack>
                  <Button leftIcon={<ViewIcon />}>Watch</Button>
                  <Button leftIcon={<EditIcon />}>Comment</Button>
                </HStack>
              </CardFooter>
            </Card>
          ))}
    </SimpleGrid>
  )
}

export const tasksLoader = async () => {
  const res  = await  fetch('http://localhost:3000/tasks')

  return res.json()
}
 
export default Dashboard
