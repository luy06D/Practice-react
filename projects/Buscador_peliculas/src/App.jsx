import { useEffect, useState } from 'react'
import {Movies} from './components/movies.jsx'
import {useMovies} from './hooks/useMovie.js'
import './App.css'

function App() {
  //Desentructuracion para obtener la movies mapeadas
  const {movies: mappedMovies} = useMovies()
  const [query , setQuery] = useState('')
  const [error , setError] = useState(null)

  const handleSubmit = (event) =>{
    event.preventDefault()
  }

  // Evento change para actualizar el estado (error)
  const handleChange = (event) =>{
    setQuery(event.target.value)
  }

  // useEffect para manejar condiones del input
  useEffect(() => {

    if(query === ''){
      setError('Ingrese el nombre de una pelicula')
      return
    }

    if(query.length < 3){
      setError('Ingrese minimo 4 caracteres')
      return
    }

    setError(null)

  }, [query])



  return (
    <div className='cabezera'>
      <header>
      <h1>Buscador de peliculas</h1>
      <form action="" className='form' onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={query} placeholder='Ingresar pelicula...' />
        <button type='submit' >Buscar</button>
      </form>
      {error &&  <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        <Movies movies={mappedMovies}/>
      </main>
    </div>

  )

}

export default App
