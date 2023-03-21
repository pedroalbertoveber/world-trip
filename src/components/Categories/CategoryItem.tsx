import { Stack, Text, Icon, useBreakpointValue } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'
import { GoPrimitiveDot } from 'react-icons/go'

interface CategoryItemProps {
  title: string
  icon: IconType
}

export function CategoryItem({ title, icon }: CategoryItemProps) {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Stack
      direction={['row', 'row', 'column']}
      spacing={['1rem', '1rem', '1.25rem']}
      display={'flex'}
      flexDir={['row', 'row', 'column']}
      align="center"
    >
      {isWideScreen ? (
        <Icon as={icon} boxSize={24} color="yellow.500" />
      ) : (
        <>
          <Icon as={GoPrimitiveDot} boxSize={8} color={'yellow.500'} />
        </>
      )}

      <Text
        fontSize={['1.125rem', '1.5rem']}
        fontWeight="semibold"
        color={'gray.700'}
      >
        {title}
      </Text>
    </Stack>
  )
}
