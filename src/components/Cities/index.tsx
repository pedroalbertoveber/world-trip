import { Box, Flex, Text } from '@chakra-ui/react'
import Paris from '../../assets/Paris.png'
import London from '../../assets/London.png'
import Praga from '../../assets/Praga.png'
import Amsterdam from '../../assets/Amsterdam.png'
import Rome from '../../assets/Rome.png'

import { CityCard } from './CityCard'

export function Cities() {
  return (
    <Box width={'100%'} maxWidth="1160px" mx="auto" px={['1rem', '0']}>
      <Text fontSize={['1.5rem', '2.25rem']} fontWeight="medium">
        Cidades +100
      </Text>
      <Flex
        width={'100%'}
        align={['center', 'flex-start']}
        justify={['center', 'space-between']}
        py={'2rem'}
        flexWrap="wrap"
      >
        <CityCard
          bgImage={Paris}
          country={'França'}
          name={'Paris'}
          flag={'/images/France.svg'}
        />
        <CityCard
          bgImage={London}
          country={'Reino Unido'}
          name={'Londres'}
          flag={'/images/UK.svg'}
        />
        <CityCard
          bgImage={Rome}
          country={'Itália'}
          name={'Roma'}
          flag={'/images/Italy.svg'}
        />
        <CityCard
          bgImage={Amsterdam}
          country={'Holanda'}
          name={'Amsterdã'}
          flag={'/images/Netherland.svg'}
        />
        <CityCard
          bgImage={Praga}
          country={'República Tcheca'}
          name={'Praga'}
          flag={'/images/TchecRepublic.svg'}
        />
      </Flex>
    </Box>
  )
}
