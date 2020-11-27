import React, { useRef } from 'react';

import '../Hooks.css';

export default function UseRef() {
  const number = useRef(0)

  function handleSetValue() {
    const newNumber = Math.round(Math.random() * (10 - 1) + 1);
    number.current = newNumber
  }

  function handlePrintValue() {
    alert(number.current);
  }

  return (
    <div className='container'>
      <button onClick={handleSetValue}>Set value</button>
      <button onClick={handlePrintValue}>Print value</button>
    </div>
  )
}