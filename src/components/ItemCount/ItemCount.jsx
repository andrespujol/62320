import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'

const ItemCount = ({initialValue, stock}) => {
    const { count, incrementar, decrementar } = useCounter(initialValue, stock)

  return (
    <div>
        <button onClick={decrementar}>-</button>
        <span>{count}</span>
        <button onClick={incrementar}>+</button>
    </div>
  )
}

export default ItemCount
