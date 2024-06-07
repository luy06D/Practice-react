
import './App.css'
import resultMovie from './api-json/result-true.json'
import resultOutMovie from './api-json/result-false.json'
import {Movies} from './components/movies.jsx'

function App() {
  const noMovie = resultOutMovie
  const movies = resultMovie.Search


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
        <Movies movies={movies}/>
      </main>
    </div>

  )

}

export default App
