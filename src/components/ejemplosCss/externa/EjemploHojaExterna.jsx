import React from 'react';
import './EjemploHojaExterna.css'

const EjemploHojaExterna = () => {
  return (
    <div className="container">
      <h2 className='title'>Ejemplo de CSS con hoja externa</h2>
      <img src="https://th.bing.com/th/id/R.6dcc55e7b98ec973092198c5440937b7?rik=O86CQA3%2fdsIpVg&pid=ImgRaw&r=0" alt="Descripción de la imagen" className='imgEjemplo'/>
      <p className='parrafo'>Este es un ejemplo de un componente React al que se le pueden aplicar estilos CSS.</p>
    </div>
  );
}

export default EjemploHojaExterna;
