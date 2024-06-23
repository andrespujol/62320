import React from 'react';
import './EjemploSass.scss'

const EjemploSass = () => {
  return (
    <div className="container--scss">
      <h2 className='title--sass'>Ejemplo de CSS con hoja externa</h2>
      <img src="https://th.bing.com/th/id/R.6dcc55e7b98ec973092198c5440937b7?rik=O86CQA3%2fdsIpVg&pid=ImgRaw&r=0" alt="Descripción de la imagen" className='imgEjemplo--sass'/>
      <p className='parrafo'>Este es un ejemplo de un componente React al que se le pueden aplicar estilos CSS.</p>
    </div>
  );
}

export default EjemploSass;
