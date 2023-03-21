import {
  Box,
  Flex,
  Image as ChakraImage,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import Airplane from '../assets/Airplane.svg'

export function Banner() {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box
      bgImage='url("/images/Background.png")'
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={'cover'}
      width={'100%'}
      height={['163px', '335px']}
      mb="2rem"
      display={'flex'}
      py={['1.75rem', '0']}
    >
      <Flex
        width={'100%'}
        maxWidth={'1160px'}
        mx="auto"
        justify={'space-between'}
        align={'center'}
        padding={['1rem', '0']}
      >
        <Box
          display={'flex'}
          flexDir="column"
          justifyContent={'flex-start'}
          gap={'1.25rem'}
          maxWidth={['none', '50%']}
        >
          <Text
            textAlign={'left'}
            fontSize={['1.25rem', '2.25rem']}
            fontWeight="medium"
            color={'gray.50'}
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text
            color={'gray.100'}
            fontSize={['0.875rem', '1.25rem']}
            fontWeight={'normal'}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou
          </Text>
        </Box>
        {isWideScreen && (
          <Box>
            <ChakraImage
              as={Image}
              src={Airplane}
              width={'26rem'}
              style={{ transform: 'rotate(3deg)' }}
              mt="4.75rem"
            />
          </Box>
        )}
      </Flex>
    </Box>
  )
}
