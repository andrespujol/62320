import { Heading } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CountryInfo = () => {
    const [ data, setData ] = useState([])

    useEffect(() => {
        const getData = (name) => {
            const url = `https://restcountries.com/v3.1/name/${name}`
            axios.get(url)
                .then((res) => setData(res.data[0].name.common))
                .catch((error) => console.log(error))
        }
        getData('Peru')
    },[])

  return (
    <div>
        <Heading>{data}</Heading>
    </div>
  )
}

export default CountryInfo
