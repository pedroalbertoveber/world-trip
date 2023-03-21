import { GoPrimitiveDot } from 'react-icons/go'
import { Icon, useBreakpointValue } from '@chakra-ui/react'

interface ItemIndexProps {
  isCurrent?: boolean
}

export function ItemIndex({ isCurrent = false }: ItemIndexProps) {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
  })

  if (isCurrent) {
    return (
      <Icon
        as={GoPrimitiveDot}
        boxSize={isWideScreen ? 8 : 6}
        color={'yellow.500'}
      />
    )
  }

  return (
    <Icon
      as={GoPrimitiveDot}
      boxSize={isWideScreen ? 8 : 6}
      color={'gray.400'}
    />
  )
}
