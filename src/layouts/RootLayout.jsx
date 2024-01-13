import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Grid, GridItem,useColorModeValue} from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';

export default function RootLayout() {
  const sidebarColor = useColorModeValue('purple.400', 'purple.800')
  const contentColor = useColorModeValue('gray.100', 'gray.500')
  return (
    <Grid templateColumns='repeat(6, 1fr)' bg={contentColor}>
      <GridItem
        as='aside'
        colSpan={{base:6, lg: 2, xl:1}}
        bg={sidebarColor}
        minHeight={{lg: '100vh'}}
        p={{base:'20px', lg: '30px'}}
      >
        <Sidebar />
      </GridItem>
      <GridItem as='main'  colSpan={{base:6, lg: 4, xl:5  }} p='40px'>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
