import { useCallback, useState } from 'react'
import {Movies} from './components/movies.jsx'
import {useMovies} from './hooks/useMovie.js'
import { useSearch } from './hooks/useSearch.js'
import './App.css'
import debounce from 'just-debounce-it'



function App() {
  const [sort , setSort] = useState(false)
  //Desentructuracion para obtener la movies mapeadas
  const {search, setSearch, error} = useSearch()
  const {responseMovies , getMovies} = useMovies({search, sort})

  
  const debounceGetMovies = useCallback(
    debounce(search => {
      console.log(search)
      getMovies({search})
    }, 800) , [getMovies]
  )

  const handleSubmit = (event) =>{
    event.preventDefault()
    getMovies({search}) 
    //Consulta ala API
  }

  const handleSort = () =>{
    setSort(!sort)
  }

  const handleChange = (event) =>{
    const newSearch = event.target.value
    setSearch(newSearch)
    debounceGetMovies(newSearch) 

  }


  return (
    <div className='cabezera'>
      <header>
      <h1>Buscador de peliculas</h1>
      <form action="" className='form' onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={search} placeholder='Ingresar pelicula...' />
        <button type='submit' >Buscar</button>
        <label htmlFor="" style={{padding: '10px'}}>Ordenar por titulo</label>
        <input type='checkbox' onChange={handleSort} checked={sort} />
      </form>
      {error &&  <p style={{color: '#CD6155'}}>{error}</p>}
      </header>
      <main>
        <Movies movies={responseMovies}/>
      </main>
    </div>

  )

}

export default App
