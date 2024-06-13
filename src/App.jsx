import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import RefFocus from './components/useRef/RefFocus'

function App() {

  return (
    <ChakraProvider>
          {/* <NavBar />
          <ItemListContainer title='Tienda'/>
           */}


          <RefFocus />
    </ChakraProvider>

  )
}

export default App
