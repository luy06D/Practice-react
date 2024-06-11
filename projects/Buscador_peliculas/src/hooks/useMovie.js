//Custom Hooks
import resultMovie from '../api-json/result-true.json'
import resultOutMovie from '../api-json/result-false.json'
import { useState } from 'react'

export function useMovies({search}){
    const [responseMovies, setResponseMovies] = useState([])
    const [previusovies, setPreviusMovies] = useState('')

    const movies = responseMovies.Search

    const getMovies = () =>{
      if(search){
        if(search === previusovies){
          alert("ya realizo la busqueda")
          return
        }

        fetch(`https://www.omdbapi.com/?apikey=b0584a99&s=${search}`)
          .then(response => response.json())
          .then(data => {
            setResponseMovies(data)
            setPreviusMovies(search) // Captura la busqueda
          })
       
      }else{
        setResponseMovies(resultOutMovie)
      }
    }

    //Mapeamos las movies en una constante
    const mappedMovies = movies?.map(movie =>({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))

    return {movies: mappedMovies, getMovies}

}

