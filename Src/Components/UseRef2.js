import React, { useRef } from 'react';

import '../Hooks.css';

export default function UseRef() {
  const inputRef = useRef(null);

  function handlePrintName() {
    console.log(inputRef.current);
    inputRef.current.focus();
    alert(inputRef.current.value);
  }

  return (
    <div className='container'>
      <input ref={inputRef} />
      <button onClick={handlePrintName}>Print value</button>
    </div>
  )
}