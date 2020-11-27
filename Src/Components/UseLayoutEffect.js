import React, { useLayoutEffect, useEffect, useState } from 'react';

import '../Hooks.css';

export default function UseRef() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('useEffect 1')
  }, [])

  useEffect(() => {
    console.log('useEffect 2')
  }, [])

  useEffect(() => {
    console.log('useEffect 3')
  }, [])

  useLayoutEffect(() => {
    console.log('useLayout effect...')
  }, [])

  // useLayoutEffect(() => {
  //   for (let i = 0; i < 5000; i++) {
  //     console.log(i)
  //   }
  // }, [counter])

  function handlePlus() {
    setCounter(prevState => prevState + 1);
  }

  return (
    <div className='container'>
      <h1>{counter}</h1>
      <button onClick={handlePlus}>+</button>
    </div>
  )
}