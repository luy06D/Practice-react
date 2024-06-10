import { useEffect, useState } from 'react'
import {Movies} from './components/movies.jsx'
import {useMovies} from './hooks/useMovie.js'
import './App.css'

  //Custom hooks validación del input(search)
  function useSearch(){
    const [search, setSearch] = useState('')
    const [error , setError] = useState(null)
    
  // useEffect para manejar condiones del input
  useEffect(() => {

    if(search === ''){
      setError('Ingrese el nombre de una pelicula')
      return
    }

    if(search.length < 3){
      setError('Ingrese minimo 4 caracteres')
      return
    }

    setError(null)

  }, [search])

  return {search, setSearch, error}


  }


function App() {
  //Desentructuracion para obtener la movies mapeadas
  const {movies: mappedMovies} = useMovies()
  const {search, setSearch, error} = useSearch()
  

  const handleSubmit = (event) =>{
    event.preventDefault()
  }

  // Evento change para actualizar el estado (error)
  const handleChange = (event) =>{
    const newQuery = event.target.value
    if(newQuery.stardsWith(' ')) return
    setSearch(event.target.value)
  }


  return (
    <div className='cabezera'>
      <header>
      <h1>Buscador de peliculas</h1>
      <form action="" className='form' onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={search} placeholder='Ingresar pelicula...' />
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
