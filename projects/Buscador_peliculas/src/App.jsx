import './App.css'
import {Movies} from './components/movies.jsx'
import {useMovies} from './hooks/useMovie.js'

function App() {
  // const noMovie = resultOutMovie

  //Desentructuracion para obtener la movies mapeadas
  const {movies: mappedMovies} = useMovies()

  return (
    <div className='cabezera'>
      <header>
      <h1>Buscador de peliculas</h1>
      <form action="" className='form'>
        <input type="text" placeholder='Ingresar pelicula...' />
        <button type='submit' >Buscar</button>
      </form>
      </header>
      <main>
        <Movies movies={mappedMovies}/>
      </main>
    </div>

  )

}

export default App
