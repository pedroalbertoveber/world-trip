import { Flex, Heading, Image as ChakraImage } from '@chakra-ui/react'
import Image from 'next/image'
import Logo from '../assets/Logo.svg'

export function Header() {
  return (
    <Heading
      height="6.25rem"
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Flex
        width={'100%'}
        maxWidth={'1160px'}
        mx={'auto'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <ChakraImage as={Image} src={Logo} height={'2.875rem'} />
      </Flex>
    </Heading>
  )
}
