//Custom Hooks
import { useState, useRef } from 'react'
import { searchMovies } from '../service/movies'
import { Movies } from '../components/movies'

export function useMovies({search, sort}){
    const [responseMovies, setResponseMovies] = useState([])
    const previusMovies = useRef('')
   
    const getMovies = async () =>{

      //evitar que se haga la misma busqueda dos veces seguidas
      if(previusMovies.current === search) return

      previusMovies.current = search
      const newMovies = await searchMovies({search})
      setResponseMovies(newMovies)


    }

    const sortedMovies = 
    sort ? [...responseMovies].sort((a, b) => a.title.localeCompare(b.title))
    : responseMovies

    return {responseMovies: sortedMovies, getMovies}

}

