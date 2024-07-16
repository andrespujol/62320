import { Box, Badge, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { getQuantity } = useContext(Context)

  return (
    <Flex mr={4} color={'#F7F8FB'} fontSize={'4xl'} w={'5%'} justify={'space-between'} align={'center'}>
      <Link to='/cart'>
        <MdOutlineShoppingCart className='cartIcon'/>
      </Link>
        <Flex justify={'center'} align={'center'} h={'50%'} w={'50%'} >
          <Badge borderRadius={'50%'}  color={'#c5d0d3'} fontSize={'md'}>{getQuantity()}</Badge>
        </Flex>
    </Flex>
  );
};

export default CartWidget;
