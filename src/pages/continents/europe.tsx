import { Cities } from '@/components/Cities'
import { ContinetBanner } from '@/components/ContinentBanner'
import { ContinentInfo } from '@/components/ContinentInfo'
import { Flex, Text } from '@chakra-ui/react'

export default function Europe() {
  return (
    <>
      <ContinetBanner />
      <Flex width={'100%'} maxWidth="1160px" mx={'auto'} py="5rem">
        <Text
          display={'block'}
          maxWidth={'50%'}
          textAlign="justify"
          fontSize={'1.5rem'}
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <Flex p={'4.375rem'} align="center" justify={'space-between'} flex={1}>
          <ContinentInfo count={50} label={'países'} />
          <ContinentInfo count={60} label={'línguas'} />
          <ContinentInfo count={27} label={'cidades +100'} moreInfo />
        </Flex>
      </Flex>
      <Cities />
    </>
  )
}
