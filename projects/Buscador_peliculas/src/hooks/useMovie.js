//Custom Hooks
import resultMovie from '../api-json/result-true.json'
import resultOutMovie from '../api-json/result-false.json'

export function useMovies(){
    const movies = resultMovie.Search
    //Mapeamos las movies en una constante
    const mappedMovies = movies?.map(movie =>({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))

    return {movies: mappedMovies}

}

