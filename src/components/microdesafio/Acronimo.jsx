import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Acronimo = () => {
    const [ data, setData ] = useState([])

    useEffect(() => {
        const getData = (pais) => {
            const url = `https://restcountries.com/v3.1/all`
            axios.get(url)
                .then((res) => {
                    const dataFiltrada = res.data.find((elem) => elem.name.common === pais)
                    setData(dataFiltrada.cca3)
                })
                .catch((error) => console.log(error))
        }
        getData('Peru')
    },[])

  return (
    <div>
        {data}
    </div>
  )
}

export default Acronimo
