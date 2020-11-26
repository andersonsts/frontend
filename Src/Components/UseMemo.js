import React, { useCallback, useMemo, useState } from 'react';

import '../Hooks.css';

export default function UseMemo() { 
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  const total = useMemo(() => {
    console.log('use memo rodou...')
    return (counter * 34 * 12)
  }, [counter])

  const handlePlus = useCallback(() => { 
    setCounter(prevState => prevState + 1)
  }, [])

  return (
    <div className='container'>
      <h1>{total}</h1>
      <button onClick={handlePlus}>+</button>

      <span>{name}</span>
      <input onChange={event => setName(event.target.value)} />
    </div>
  )
}