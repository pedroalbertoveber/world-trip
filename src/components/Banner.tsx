import { Box, Flex, Image as ChakraImage, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Airplane from '../assets/Airplane.svg'

export function Banner() {
  return (
    <Box
      bgImage='url("/images/Background.png")'
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={'cover'}
      width={'100%'}
      height="335px"
      mb="2rem"
    >
      <Flex
        width={'100%'}
        maxWidth={'1160px'}
        mx="auto"
        justify={'space-between'}
        align={'center'}
      >
        <Box
          display={'flex'}
          flexDir="column"
          justifyContent={'flex-start'}
          gap={'1.25rem'}
          maxWidth={'50%'}
        >
          <Text
            textAlign={'left'}
            fontSize={'2.25rem'}
            fontWeight="medium"
            color={'gray.50'}
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text color={'gray.100'} fontSize={'1.25rem'} fontWeight={'normal'}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou
          </Text>
        </Box>
        <Box>
          <ChakraImage
            as={Image}
            src={Airplane}
            width={'26rem'}
            style={{ transform: 'rotate(3deg)' }}
            mt="4.75rem"
          />
        </Box>
      </Flex>
    </Box>
  )
}
