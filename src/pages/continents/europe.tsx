import { Cities } from '@/components/Cities'
import { ContinetBanner } from '@/components/ContinentBanner'
import { ContinentInfo } from '@/components/ContinentInfo'
import { Flex, Text } from '@chakra-ui/react'

export default function Europe() {
  return (
    <>
      <ContinetBanner />
      <Flex
        width={'100%'}
        maxWidth="1160px"
        mx={'auto'}
        py={['1.5rem', '5rem']}
        px={['1rem', '0']}
        flexDir={['column', 'column', 'row']}
      >
        <Text
          display={'block'}
          maxWidth={['none', '50%']}
          textAlign="justify"
          fontSize={['0.875rem', '1.5rem']}
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Flex
          p={['0', '4.375rem']}
          py={['1rem', 0]}
          align="center"
          justify={'space-between'}
          width={['100%', 'auto']}
          flex={1}
        >
          <ContinentInfo count={50} label={'países'} />
          <ContinentInfo count={60} label={'línguas'} />
          <ContinentInfo count={27} label={'cidades +100'} moreInfo />
        </Flex>
      </Flex>
      <Cities />
    </>
  )
}
