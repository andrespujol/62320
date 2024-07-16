import React, { useContext, useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Flex,
    Input,
    Heading,
    Button,
    Box,
  } from '@chakra-ui/react'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Context from '../../context/CartContext'


const Checkout = () => {
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone: ''
    })
    const [ error, setError ] = useState({})

    const { cart, getTotalPrice } = useContext(Context)

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        const errors = {}
        if(!user.name) {
            errors.name  = 'Tenés que agregar un nombre'
        }else if(user.name.length < 3 || user.name.length > 15) {
            errors.name = "El nombre debe tener al menos 3 caracteres y un máximo de 15"
        }
        if(!user.email){
            errors.email = 'Tenés que ingresar un email'
        }else if(!/\S+@\S+\.\S+/.test(user.email)){
            errors.email = 'Tenés que ingresar un email válido'
        }
        if(!user.repeatedEmail) {
            errors.repeatedEmail  = 'Tenés que volver a ingresar el email'
        }else if(user.email !== user.repeatedEmail) {
            errors.repeatedEmail = "Los emails no coinciden"
        }
        if(!user.phone){
            errors.phone = 'Tenés que agregar un teléfono'
        }else if(user.phone.length < 8){
            errors.phone = 'Tenés que ingresar un teléfono válido'
        }
        setError(errors)
        console.log(errors)
        return Object.keys(errors).length === 0
    }

    const getOrder = async () => {
        if(!validateForm()){
            return
        }
        if(cart.length === 0) {
            console.log('el carrito está vacío')
            return
        }
        const ordersCollection = collection(db, 'orders')

        try {
            const order = {
                buyer: user,
                cart: cart,
                total: getTotalPrice(),
                fechaDeCompra: Timestamp.now()
            }
            const orderRef = await addDoc(ordersCollection, order)
            console.log(orderRef)
            console.log(`El número de orden es: ${orderRef.id}`)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <Flex direction={'column'} justify={'center'} align={'center'} w={'100%'}>
        <Box w={'50%'} textAlign={'center'}>
            <Heading my={5} color={'#3F747D'}>Datos de facturación</Heading>
            <FormControl isInvalid={Object.keys(error).length > 0}>
                <Input 
                    type='text' 
                    name='name' 
                    placeholder='Nombre' 
                    sx={{
                        '::placeholder': {
                            color: '#3F747D',
                        },
                    }}
                    onChange={updateUser} />
                <FormErrorMessage mb={2}>{error.name}</FormErrorMessage>
                <Input 
                    type='email'
                    name='email' 
                    placeholder='Email' 
                    sx={{
                        '::placeholder': {
                            color: '#3F747D',
                        },
                    }}
                    onChange={updateUser}/>
                <FormErrorMessage mb={2}>{error.email}</FormErrorMessage>
                <Input 
                    type='email'
                    name='repeatedEmail' 
                    placeholder='Repetir email'
                    sx={{
                        '::placeholder': {
                            color: '#3F747D',
                        },
                    }}
                    onChange={updateUser}/>
                <FormErrorMessage mb={2}>{error.repeatedEmail}</FormErrorMessage>
                <Input 
                    type='text' 
                    name='phone' 
                    placeholder='Teléfono' 
                    sx={{
                        '::placeholder': {
                            color: '#3F747D',
                        },
                    }}
                    onChange={updateUser}/>
                <FormErrorMessage mb={2}>{error.phone}</FormErrorMessage>
                <Flex justify={'center'} align={'center'}>
                    <Button 
                        bg={'#3F747D'} 
                        onClick={getOrder} 
                        mt={2}
                        _hover={{
                            backgroundColor: '#608e8e',
                            color: '#fff',
                        }}
                        >
                            Finalizar compra
                    </Button>
                </Flex>
            </FormControl>
        </Box>
    </Flex>
  )
}

export default Checkout
