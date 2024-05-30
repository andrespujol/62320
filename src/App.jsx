import './App.css'
import Boton from './components/Boton/Boton'
import BotonDinamico from './components/BotonDinamico/BotonDinamico'
function App() {

  return (
    <>
      <Boton />
      <BotonDinamico 
        texto='Soy un botón dinámico'
        clase='btn'
        id='btn'
        disabled={false}
      />
      <BotonDinamico 
        texto='Soy otro botón dinámico'
      />
    </>
  )
}

export default App
