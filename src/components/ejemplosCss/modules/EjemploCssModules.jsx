import React from 'react';
import styles from './EjemploCssModules.module.css'

const EjemploCssModules = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ejemplo de CSS con hoja externa</h2>
      <img src="https://th.bing.com/th/id/R.6dcc55e7b98ec973092198c5440937b7?rik=O86CQA3%2fdsIpVg&pid=ImgRaw&r=0" alt="Descripción de la imagen" className={styles.imgEjemplo}/>
      <p className='parrafo'>Este es un ejemplo de un componente React al que se le pueden aplicar estilos CSS.</p>
    </div>
  );
}

export default EjemploCssModules;
