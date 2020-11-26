import React, { useReducer } from 'react';

import '../Hooks.css';

function reducer(state, action) { // Essa funcao sempre precisa retornar algo...
  switch (action.type) {
    case 'PLUS':
      return {
        counter: state.counter + 1,
        clicks: state.clicks + 1  
      }

    case 'MINUS':
      return {
        counter: state.counter - 1,
        clicks: state.clicks + 1
      }

    default:
      return state;
  }
}

const initialValue = {
  counter: 0,
  clicks: 0
}

export default function UseReducer() { 
  const [state, dispatch] = useReducer(reducer, initialValue);

  function handlePlus() {
    dispatch({ type: 'PLUS' })
  }

  function handleMinus() {
    dispatch({ type: 'MINUS' })
  }

  return (
    <div className='container'>
      <h1>{state.counter}</h1>
      <h1>Cliques: {state.clicks}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button> 
    </div>
  )
}