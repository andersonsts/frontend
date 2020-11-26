import React, { useCallback, useState } from 'react';

import '../Hooks.css';

const fnCounter = new Set(); // Cria uma collection com valores únicos

export default function UseCallback() { 
  const [counter, setCounter] = useState(0);

  const handlePlus = useCallback(() => { // utilizar useCallback quando precisarmos passar uma função para components filhos
    setCounter(prevState => prevState + 1)
  }, [])

  return (
    <div className='container'>
      <h1>{counter}</h1>
      <Button onClick={handlePlus} />
    </div>
  )
}

function Button(props) {
  return (
    <button onClick={props.onClick}>+</button>
  )
}