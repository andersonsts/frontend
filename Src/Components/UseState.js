import React, { useEffect, useState } from 'react';

import '../Hooks.css';

export default function UseState() { 
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('First render');
  }, [])

  useEffect(() => {
    console.log('counter');
  }, [counter])

  useEffect(() => {
    console.log('name');
  }, [name])
  
  function handlePlus() {
    setCounter(prevState => prevState + 1)
  }

  function handleMinus() {
    setCounter(prevState => prevState > 0 ? prevState - 1 : 0)
  }

  return (
    <div className='container'>
      <h1>{counter}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus} disabled={counter === 0}>-</button>
      <input onChange={event => setName(event.target.value)} value={name} />
    </div>
  )
}