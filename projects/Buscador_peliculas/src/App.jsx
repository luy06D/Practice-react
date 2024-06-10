import {Movies} from './components/movies.jsx'
import {useMovies} from './hooks/useMovie.js'
import { useSearch } from './hooks/useSearch.js'
import './App.css'


function App() {
  //Desentructuracion para obtener la movies mapeadas
  const {movies: mappedMovies} = useMovies()
  const {search, setSearch, error} = useSearch()
  

  const handleSubmit = (event) =>{
    event.preventDefault()
  }

  // Evento change para actualizar el estado (error)
  const handleChange = (event) =>{
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
