import React, { createContext, useContext } from 'react';

import '../Hooks.css';

const ThemeContext = createContext()

export default function UseContext() { 
  return (
    <ThemeContext.Provider value={{ mode: 'dark' }}>
      <div className="container">
        <Button />
      </div>
    </ThemeContext.Provider>
  )
}

function Button() {
  const theme = useContext(ThemeContext);

  return (
    <button>{theme.mode}</button>
  )
}