import { VStack, Text, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

interface CategoryItemProps {
  title: string
  icon: IconType
}

export function CategoryItem({ title, icon }: CategoryItemProps) {
  return (
    <VStack spacing={'1.25rem'}>
      <Icon as={icon} boxSize={24} color="yellow.500" />
      <Text fontSize={'1.5rem'} fontWeight="semibold" color={'gray.700'}>
        {title}
      </Text>
    </VStack>
  )
}
