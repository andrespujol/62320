import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text,Button, ButtonGroup, Divider, Image } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const Item = ({nombre, id, img, precio, stock}) => {
  return (
<Card maxW='sm' m={3}>
  <CardBody>
    <Image
      src={img}
      alt={nombre}
      w={'350px'}
      h={'350px'}
      objectFit={'cover'}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{nombre}</Heading>

      <Text color='blue.600' fontSize='2xl'>
        ${precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='ghost' colorScheme='blue'>
        <Link to={`/producto/${id}`}>Ver detalle</Link>
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default Item
