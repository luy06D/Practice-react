
const API_KEY = 'b0584a99'

// Utilizamos async await para 
export const searchMovies = async ({search}) =>{

    try{
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const data = await response.json()
    
            const movies = data.Search
      
            //Mapeamos las movies en una constante
            return movies?.map(movie =>({
              id: movie.imdbID,
              title: movie.Title,
              year: movie.Year,
              poster: movie.Poster
            }))

    } catch(e){   
        throw new Error(`Error al buscar la pelicula: ${e.message}`)

    }

}   