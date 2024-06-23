import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'
import EjemploHojaExterna from './components/ejemplosCss/externa/EjemploHojaExterna'
import EjemploSass from './components/ejemplosCss/sass/EjemploSass'
import EjemploCssModules from './components/ejemplosCss/modules/EjemploCssModules'
import EjemploStyledComponents from './components/ejemplosCss/styled-components/StyledComponents'
import NavBar from './components/NavBar/NavBar'
import CountryInfo from './components/microdesafio/CountryInfo'
import Acronimo from './components/microdesafio/Acronimo'
import Pokemon from './components/microdesafio/Pokemon'
function App() {

  return (
    <ChakraProvider>
      <NavBar />

      <ItemListContainer title='Tienda'/>
      {/* <EjemploHojaExterna />
      <EjemploSass />
      <EjemploCssModules />
      <EjemploStyledComponents />  */}


    {/* microdesafío           */}
      {/* <CountryInfo />
      <Acronimo />
      <Pokemon /> */}
    </ChakraProvider>

  )
}

export default App
