import { Flex, Heading, Image as ChakraImage } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Logo from '../assets/Logo.svg'
import { GoBackButton } from './GoBackButton'

export function Header() {
  const { asPath } = useRouter()

  const isOutOfHomePage = asPath !== '/'

  return (
    <Heading
      height={['3.125rem', '6.25rem']}
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
        position={'relative'}
      >
        {isOutOfHomePage && <GoBackButton />}

        <ChakraImage as={Image} src={Logo} height={['1.25rem', '2.875rem']} />
      </Flex>
    </Heading>
  )
}
