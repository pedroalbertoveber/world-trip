import { Banner } from '@/components/Banner'
import { Carrousel } from '@/components/Carrousel'
import { Categories } from '@/components/Categories'
import { Box, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <Box width={'100%'} maxWidth="1180px" mx={'auto'}>
        <Text
          fontSize={'2.25rem'}
          fontWeight="medium"
          textAlign={'center'}
          py="3.25rem"
        >
          Vamos nessa? <br /> Então escolha seu continente
        </Text>
        <Carrousel />
      </Box>
    </>
  )
}
