import React, { useContext, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text,Button, ButtonGroup, Divider, Image, Flex, Link as ChakraLink } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCartCheckout, MdOutlineShoppingBag  } from "react-icons/md";

const ItemDetail = ({ nombre, descripcion, id, img, precio, stock, categoria}) => {
  const [ quantity, setQuantity ] = useState(0)
  const { addItem } = useContext(Context)

    const onAdd = (quantity) => {
      const item = {
        id,
        nombre,
        precio
      }
      setQuantity(quantity)
      addItem(item, quantity)
        toast.success(`Agregaste ${quantity} productos`)
    }

  return (
    <>
      <Card w={'80%'} h={'100%'} boxShadow='lg' mt={10} >
          <Flex bg={'#3F747D'} h={'5rem'} justify={'flex-start'} align={'center'} borderRadius={'5px 5px 0 0'} >
          <Text ml={2} fontSize="md" color="#c5d0d3">Categoría: {categoria}</Text>

          </Flex>
          <Flex
              wrap={'wrap'}
              align={'center'}
              justify={'space-between'}
              w={'100%'} 
              h={'100%'}
              className='cardFlex'
              >
              <Flex
                  w={'40%'}
                  h={'90%'}
                  justify={'center'}
                  align={'center'}
                  >

              <Image
              src={img}
              alt={nombre}
              borderRadius="lg"
              boxSize='100%'
              objectFit='contain' 
              w='100%'
              h='400px' 
              rowSpan={2} colSpan={1} 
              ml={2}
              />
              </Flex>
              <Flex
                  direction={'column'}
                  justify={'space-around'}
                  align={'start'}
                  w={'50%'}
                  minHeight={'400px'}
                  >
              <Heading size="xl" color="#F3F3EF" h={'4rem'}  > {nombre}</Heading>
              <Text color="#F3F3EF" fontSize="xl" w={'95%'}  >
                  {descripcion}
              </Text>
              <Text color="#3F74F3F3EF7D" fontSize="2xl"  >
                  ${precio}
              </Text>
              </Flex>
              <Flex w={'100%'} h={'10%'} justify={'center'} align={'center'} pb={5}>
              {
                quantity > 0 ? 
                <Flex 
                    justify={'space-around'} 
                    align={'center'} 
                    w={'100%'}
                    bg={'#416d6d'}
                    h={'5rem'} 
                    color={'#fff'}
                    
                    >
                    <Flex justify={'center'} align={'center'} w={'100%'} _hover={{ bg: '#608e8e', color: '#fff' }} >
                        <ChakraLink mr={4} w={'50%'} fontSize={'1.2rem'} as={Link} to='/cart'>Ir al carrito</ChakraLink>
                        <Flex justify={'center'} w={'20%'} align={'center'} bg={'#c86f43'}  h={'5rem'}>
                            <MdOutlineShoppingCartCheckout fontSize={'2rem'}/>
                        </Flex>
                    </Flex>
                    <Divider orientation='vertical' />
                    <Flex justify={'center'} align={'center'} w={'100%'} _hover={{ bg: '#608e8e', color: '#fff' }}>
                        <ChakraLink mr={4} w={'50%'}  fontSize={'1.2rem'} as={Link} to='/'>Seguir comprando</ChakraLink>
                        <Flex justify={'center'} w={'20%'} align={'center'} bg={'#c86f43'}  h={'5rem'}>
                            <MdOutlineShoppingBag fontSize={'2rem'} />
                        </Flex>
                    </Flex>
                </Flex>
                :
                <Flex w={'100%'} justify={'center'} align={'center'} pb={5}>
                    <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
                </Flex>
            }
              </Flex>              
          </Flex>
      </Card>
      <ToastContainer />
    </>
  )
}

export default ItemDetail
