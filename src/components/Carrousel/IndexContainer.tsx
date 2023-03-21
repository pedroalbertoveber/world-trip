import { Flex } from '@chakra-ui/react'
import { ItemIndex } from './ItemIndex'

export function IndexContainer() {
  return (
    <Flex
      position={'absolute'}
      bottom="16px"
      style={{ transform: 'translateX(-50%)' }}
      gap="0.75rem"
      left={'50%'}
    >
      <ItemIndex isCurrent />
      <ItemIndex />
      <ItemIndex />
      <ItemIndex />
    </Flex>
  )
}
