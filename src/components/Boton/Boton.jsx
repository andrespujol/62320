import React from 'react'

const Boton = () => {
    
    const handleClick = () => {
        alert('clickeaste')
    }

    return (
        <button onClick={handleClick}>Clickeame</button>
    )
}

export default Boton
