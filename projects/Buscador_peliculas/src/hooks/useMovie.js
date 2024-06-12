//Custom Hooks
import { useState, useRef } from 'react'
import { searchMovies } from '../service/movies'

export function useMovies({search}){
    const [responseMovies, setResponseMovies] = useState([])
    const previusovies = useRef('')
   
    const getMovies = async () =>{

      //evitar que se haga la misma busqueda dos veces seguidas
      if(previusovies.current === search){
        return
      } 
      const newMovies = await searchMovies({search})
      previusovies.current = search
      setResponseMovies(newMovies)


    }

    return {responseMovies, getMovies}

}

