import { Box, Divider, Flex } from '@chakra-ui/react'
import { BiDrink } from 'react-icons/bi'
import { TbBeach } from 'react-icons/tb'
import { BsBuildings } from 'react-icons/bs'
import { GiGreekTemple, GiWorld } from 'react-icons/gi'

import { CategoryItem } from './CategoryItem'

export function Categories() {
  return (
    <>
      <Box width={'100%'} py={['2.25rem', '2.25rem', '5rem']}>
        <Flex
          width={'100%'}
          maxWidth={['none', 'none', '1160px']}
          mx={'auto'}
          align="center"
          flexWrap={['wrap', 'wrap', 'nowrap']}
          justify={['space-evenly', 'space-around']}
          gap={['2rem', '2rem', '0']}
          padding={['1rem', '1rem', '0']}
        >
          <CategoryItem title="vida noturna" icon={BiDrink} />
          <CategoryItem title="praia" icon={TbBeach} />
          <CategoryItem title="moderno" icon={BsBuildings} />
          <CategoryItem title="clássico" icon={GiGreekTemple} />
          <CategoryItem title="e mais..." icon={GiWorld} />
        </Flex>
      </Box>
      <Divider
        width={'5.625rem'}
        borderTop="1px"
        borderTopColor={'gray.700'}
        mx="auto"
      />
    </>
  )
}
