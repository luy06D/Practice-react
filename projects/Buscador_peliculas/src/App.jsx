
import './App.css'
import resultMovie from './api-json/result-true.json'
import resultOutMovie from './api-json/result-false.json'

function App() {
  // const noMovie = resultOutMovie
  const movies = resultMovie.Search
  const hasMovies = movies?.length > 0

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
        {hasMovies?(
          <ul>{movies.map(movie => (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt="movie de la api" />

            </li>
          ))}</ul>
        ): (<p>No result</p>)}
      </main>
    </div>

  )

}

export default App
