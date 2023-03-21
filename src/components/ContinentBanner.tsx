import { Box, Flex, Text } from '@chakra-ui/react'

export function ContinetBanner() {
  return (
    <Flex
      as="section"
      width={'100%'}
      height={['150px', '31.25rem']}
      bgRepeat="no-repeat"
      bgSize={'cover'}
      bgImage={'url("/images/LondonBg.png")'}
      paddingBottom={'3.75rem'}
    >
      <Box
        backgroundColor={'transparent'}
        marginTop={'auto'}
        width="100%"
        maxWidth={'1160px'}
        mx="auto"
      >
        <Text
          fontSize={['1.75rem', '3rem']}
          fontWeight={'semibold'}
          color={'gray.50'}
          textAlign={['center', 'left']}
          width={'100%'}
        >
          Europa
        </Text>
      </Box>
    </Flex>
  )
}
