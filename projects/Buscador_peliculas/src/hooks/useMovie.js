//Custom Hooks
import { useState, useRef, useCallback, useMemo } from 'react'
import { searchMovies } from '../service/movies'


export function useMovies({search, sort}){
    const [responseMovies, setResponseMovies] = useState([])
    const previusMovies = useRef('')
   
    const getMovies = useCallback( async ({search}) =>{

      //evitar que se haga la misma busqueda dos veces seguidas
      if(previusMovies.current === search) return

      previusMovies.current = search
      const newMovies = await searchMovies({search})
      console.log(newMovies)
      setResponseMovies(newMovies)


    }, [])

    const sortedMovies = useMemo(() =>{
      sort ? [...responseMovies].sort((a, b) => a.title.localeCompare(b.title))
      : responseMovies
    }, [sort, responseMovies])

    return {responseMovies: sortedMovies, getMovies}

}

