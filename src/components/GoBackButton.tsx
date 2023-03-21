import Link from 'next/link'
import { Icon } from '@chakra-ui/react'
import { IoIosArrowBack } from 'react-icons/io'

export function GoBackButton() {
  return (
    <Link href={'/'}>
      <Icon
        as={IoIosArrowBack}
        boxSize={8}
        color="gray.300"
        cursor={'pointer'}
        position={'absolute'}
        style={{ transform: 'translateY(-50%)' }}
        left={'calc((100% - 1160px) / 2)'}
        _hover={{ color: 'gray.700', transition: 'all .2s' }}
      />
    </Link>
  )
}
