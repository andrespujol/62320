import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import 'react-toastify/dist/ReactToastify.css';
import PageNotFound from './components/PageNotFound/PageNotFound'
import { CartContextProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer title='Tienda' />} />
            <Route path='/categoria/:categoryId' element={<ItemListContainer title='Tienda'/>} />
            <Route path='/producto/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>

  )
}

export default App
