import { Flex, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { IndexContainer } from './IndexContainer'

export function Carrousel() {
  return (
    <Flex
      justify={'space-between'}
      align="center"
      mb={'2rem'}
      p={'1rem'}
      width={'100%'}
      maxWidth={'1160px'}
      height="450px"
      bgImage={'url("/images/Europe.png")'}
      position="relative"
    >
      <Icon
        as={IoIosArrowBack}
        boxSize={12}
        color="yellow.500"
        cursor={'pointer'}
      />
      <Flex flexDir={'column'} align="center" gap={'1rem'}>
        <Link href={'/europe'}>
          <Text
            as={'h2'}
            display="block"
            fontSize={'3rem'}
            fontWeight="bold"
            color={'gray.50'}
            _hover={{ color: 'yellow.500', transition: 'all 0.2s' }}
          >
            Europa
          </Text>
        </Link>
        <Text
          as={'strong'}
          display="block"
          color={'gray.100'}
          fontWeight="bold"
          fontSize={'1.5rem'}
        >
          O continente mais antigo.
        </Text>
      </Flex>
      <Icon
        as={IoIosArrowForward}
        boxSize={12}
        color="yellow.500"
        cursor={'pointer'}
      />
      <IndexContainer />
    </Flex>
  )
}
