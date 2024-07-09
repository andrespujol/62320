import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import { Button, Flex, Heading } from '@chakra-ui/react'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const { count, incrementar, decrementar } = useCounter(initialValue, stock)

  return (
    <Flex>
        <Button 
          onClick={decrementar}
          background={'#C49450'} 
          color={'#3F747D'}
          _hover={{ bg: '#D2A567', cursor: 'pointer' }}
          >
            -
        </Button>
        <Heading mx={3} color={'#3F747D'}>{count}</Heading>
        <Button 
          onClick={incrementar}
          background={'#C49450'} 
          color={'#3F747D'}
          _hover={{ bg: '#D2A567', cursor: 'pointer' }}
          >
            +
        </Button>
        <Button 
          onClick={() => onAdd(count)}
          background={'#C49450'} 
          color={'#3F747D'}
          ml={3}
          _hover={{ bg: '#D2A567', cursor: 'pointer' }}
          >
          Agregar al carrito
        </Button>
    </Flex>
  )
}

export default ItemCount
