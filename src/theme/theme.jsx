import { extendTheme } from '@chakra-ui/react';
import "@fontsource/poppins";
import "@fontsource/solway";

const theme = extendTheme({
  fonts: {
    heading: `"Poppins", sans serif`,	
  	body: `"Solway", sans-serif`,
  },
  colors: {
    primary: {
      100: '#ff6334',
      200: '#53565a',
      300: '#53565a',
      400: '#53565a',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#ffffff1f',
      800: '#1a1d1e',
      900: '#1f2223',
      1000: '#111213',
      1100: '#0d1117',
    },
  },
})

export default theme;
