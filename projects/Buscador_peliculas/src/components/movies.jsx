
// Separarmos los componenetes 

//Componente que renderiza la lista de movies
function ListMovies ({movies}){
    return(
        <ul>{movies.map(movie => (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt="movie de la api" />

            </li>
          ))}</ul>

    )
}

//Componente , renderiza si no se encuentra la movie
function NoMovieResult (){
    return (<p>No se encontraron peliculas para esta busqueda</p>)
}

//Componente condicional
export function Movies ({movies}){
    const hasMovies = movies?.length > 0
    return(
        hasMovies? <ListMovies movies={movies} />
        : <NoMovieResult/>

    )   
}