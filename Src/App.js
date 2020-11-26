import React, { useState, useEffect } from 'react';
import api from './Services/api';

import './App.css';
import backgroundImg from './assets/image.jpg'

import Header from './Components/Header';
import UseState from './Components/UseState';
import UseContext from './Components/UseContext';
import UseReducer from './Components/UseReducer';
import UseCallback from './Components/UseCallback';
import UseMemo from './Components/UseMemo';
import UseRef from './Components/UseRef';

const INITIAL_VALUE_ARRAY_RESPONSE = 0;
const END_VALUE_ARRAY_RESPONSE     = 20;

function App() {
  const [projects, setProjects] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    setLoadingData(true);

    api.get('posts')
      .then(response => {
        const projectsResponseApi = response.data
          .slice(INITIAL_VALUE_ARRAY_RESPONSE, END_VALUE_ARRAY_RESPONSE)
          .map(item => ({ title: item.title }))

        setProjects([...projectsResponseApi])
      })
      .catch(err => console.log(err))
      .finally(() => setLoadingData(false))
  }, [])

  function handleAddProject() {
    setLoadingData(true)

    const timer1 = setTimeout(() => {
      setLoadingData(false)  
    }, 5000);

    () => clearTimeout(timer1);
    
    setProjects(prevState => [{ title: `Novo projeto ${Date.now()}` }, ...prevState])
  }

  return (
    <>
      {/* <UseState /> */}
      {/* <UseContext /> */}
      {/* <UseReducer /> */}
      {/* <UseCallback /> */}
      {/* <UseMemo /> */}
      <UseRef />

      <Header title="Projects" />

      <img width={500} src={backgroundImg} />

      {loadingData ? <h1>Carregando dados...</h1> : 
        <ul>
          {projects.map((project, index) => <li key={String(index)}>{project.title}</li>)}
        </ul>
      }

      <input placeholder="Name" readOnly={loadingData} disabled={loadingData} />

      <button type="button" onClick={handleAddProject} disabled={loadingData}>
        Adicionar projeto
      </button>

      <select 
        onChange={({ target }) => console.log('select', target.value)}
        disabled={loadingData}
      >
        <option>Escolha</option>
        <option value="1">Primeiro</option>
        <option value="2">Segundo</option>
        <option value="3">Terceiro</option>
      </select>
    </> 
  )
}

export default App;