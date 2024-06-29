  import { useEffect, useState, useRef } from "react"
  
  //Custom hooks validación del input(search)
  export function useSearch(){
    const [search, setSearch] = useState('')
    const [error , setError] = useState(null)
    const isFirstInput = useRef(true)
    
  // useEffect para manejar condiones del input
  useEffect(() => {
    if(isFirstInput.current){
        isFirstInput.current = search === ''
        return
    }

    if(search === ''){
      setError('Ingrese el nombre de una pelicula')
      return
    }

    if(search.length < 3){
      setError('Ingrese minimo 3 caracteres')
      return
    }

    setError(null)

  }, [search])

  return {search, setSearch, error}

  }