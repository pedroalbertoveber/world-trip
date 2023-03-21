import { GoPrimitiveDot } from 'react-icons/go'
import { Icon } from '@chakra-ui/react'

interface ItemIndexProps {
  isCurrent?: boolean
}

export function ItemIndex({ isCurrent = false }: ItemIndexProps) {
  if (isCurrent) {
    return <Icon as={GoPrimitiveDot} boxSize={8} color={'yellow.500'} />
  }

  return <Icon as={GoPrimitiveDot} boxSize={8} color={'gray.400'} />
}
