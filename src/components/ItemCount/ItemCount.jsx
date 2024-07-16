import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import { Button, Flex, Heading } from '@chakra-ui/react'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const { count, incrementar, decrementar } = useCounter(initialValue, stock)

  return (
    <Flex>
        <Button 
          onClick={decrementar}
          background={'#3F747D'} 
          color={'#F7F8FB'}
          _hover={{ bg: '#4A8994', cursor: 'pointer' }}
          >
            -
        </Button>
        <Heading mx={3} color={'#F7F8FB'}>{count}</Heading>
        <Button 
          onClick={incrementar}
          background={'#3F747D'} 
          color={'#F7F8FB'}
          _hover={{ bg: '#4A8994', cursor: 'pointer' }}
          >
            +
        </Button>
        <Button 
          onClick={() => onAdd(count)}
          background={'#3F747D'} 
          color={'#F7F8FB'}
          ml={3}
          _hover={{ bg: '#4A8994', cursor: 'pointer' }}
          >
          Agregar al carrito
        </Button>
    </Flex>
  )
}

export default ItemCount
