import { Box, Flex, Text, Image as ChakraImage } from '@chakra-ui/react'
import Image from 'next/image'

interface CityCardProps {
  bgImage: any
  name: string
  country: string
  flag: string
}

export function CityCard({ bgImage, country, flag, name }: CityCardProps) {
  return (
    <Flex
      border={'1px'}
      borderColor={'yellow.500'}
      borderRadius={6}
      flexDir="column"
      mb={['1.25rem', '3rem']}
    >
      <ChakraImage as={Image} src={bgImage} width={'16rem'} />
      <Flex
        width={'100%'}
        padding="1rem"
        align={'center'}
        justify={'space-between'}
      >
        <Box>
          <Text fontSize={'1.25rem'} fontWeight={'semibold'}>
            {name}
          </Text>
          <Text fontSize={'1rem'} color={'gray.300'}>
            {country}
          </Text>
        </Box>
        <Box>
          <Image
            src={flag}
            width={30}
            height={30}
            alt={`${country} / ${name}`}
            title={`${country} / ${name}`}
          />
        </Box>
      </Flex>
    </Flex>
  )
}
