import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { BounceLoader } from 'react-spinners'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({})
    const { productId } = useParams()
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const getData = async () => {

            // obtenemos la referencia al documento específico en la colección, para eso filtramos por el parámetro
            const queryRef = doc(db, 'productos', productId)

            // creamos una referencia de consulta (queryRef)
            const response = await getDoc(queryRef)

            // creamos un objeto que contiene los datos del doc + el id
            const newItem = {
                ...response.data(),
                id: response.id
            }
            setProduct(newItem)
            setLoading(false)
        }
        getData()
    }, [])

    return (
        <Box>
            {
                loading ? 
                <Flex justify={'center'} align={'center'} h={'50vh'}>
                    <BounceLoader color='#55868C'/>
                </Flex>
                :
                <Flex justify={'center'} align={'center'} h={'70vh'}>
                    <ItemDetail {...product} />
                </Flex>
            }
        </Box>
    )
}

export default ItemDetailContainer
