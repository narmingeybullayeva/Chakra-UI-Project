import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
};

const colors = {
  brand: {
    900: '#024fc9',
    800: '#146af5',
    700: '#2977f2',
    600: '#337df2',
    500: '#4287f5',
  },
};
const fonts = {
  body: 'Tahoma',
  heading: 'Courier New',
};

const theme = extendTheme({ colors, fonts });

export default theme;
