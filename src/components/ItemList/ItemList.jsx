import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ productos }) => {
  return (
    <Flex wrap={'wrap'} justify={'center'} align={'center'}>
        {
            productos.map((prod) => (
                <Box key={prod.id}>
                    <Item {...prod} />
                </Box>
            ))
        }
    </Flex>
  )
}

export default ItemList
