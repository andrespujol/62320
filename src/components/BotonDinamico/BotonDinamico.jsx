import React from 'react'

const BotonDinamico = ({texto, clase, id, disabled}) => {
    // const props = {
    //     texto: 'Soy un botón dinámico', 
    //     clase: 'btn', 
    //     id: 'btn', 
    //     disabled: true
    // }
    const handleClick = () => {
        alert('clickeaste un botón dinámico')
    }

    return (
        <div>
            <button disabled={disabled} className={clase} id={id} onClick={handleClick}>
                {texto}
            </button>
        </div>
    )
}

export default BotonDinamico
