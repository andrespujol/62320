import React, { createContext, useState } from 'react'

const Context = createContext()

export const CartContextProvider = ({children}) => {
    const [ cart, setCart ] = useState([])

    const addItem = (productToAdd, quantity) => {
        const newItem = {
            ...productToAdd,
            quantity
        }
        const isInCart = cart.some((prod) => prod.id === newItem.id)
        if(isInCart) {
            const updatedCart = cart.map((prod) => 
                prod.id === newItem.id ? { ...prod, quantity: prod.quantity + quantity } : prod
            )
            setCart(updatedCart)
        }else {
            setCart([...cart, newItem])
        }
    }

    const removeItem = (id) => {
        const updatedCart = cart.filter((prod) => prod.id !== id)
        setCart(updatedCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const getQuantity = () => {
        let total = 0
        cart.forEach((prod) => {
            total = total + prod.quantity
        })
        return total
    }

    const getTotalPrice = () => {
        const total = cart.reduce((actual, item) => actual + item.precio * item.quantity, 0)
        return total
    }

  return (
   <Context.Provider 
    value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        getQuantity,
        getTotalPrice
        }}> 
   {children}
   </Context.Provider>
  )
}

export default Context
