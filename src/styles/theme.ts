import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    gray: {
      50: '#F5F8FA',
      100: '#DADADA',
      300: '#999999',
      700: '#47585B',
    },
    yellow: {
      500: '#FFBA08',
    },
    black: '#000000',
    white: '#FFFFFF',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.700',
      },
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
})

export default theme
