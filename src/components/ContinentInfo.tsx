import { Flex, Text, Icon } from '@chakra-ui/react'
import { FiInfo } from 'react-icons/fi'

interface ContinentInfoProps {
  count: number
  label: string
  moreInfo?: boolean
}

export function ContinentInfo({
  count,
  label,
  moreInfo = false,
}: ContinentInfoProps) {
  return (
    <Flex flexDir={'column'} align={['flex-start', 'center']}>
      <Text
        fontWeight={['semibold']}
        fontSize={['1.125rem', '3rem']}
        color="yellow.500"
      >
        {count}
      </Text>
      <Text
        fontSize={['1.125rem', '1.25rem']}
        fontWeight={['medium', 'semibold']}
        color="gray.700"
      >
        {label} {moreInfo && <Icon as={FiInfo} color="gray.100" />}
      </Text>
    </Flex>
  )
}
