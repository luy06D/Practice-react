
// Separarmos los componentes 

//Componente que renderiza la lista de movies
function ListMovies ({movies}){
    return(
        <ul className="movies">{movies.map(movie => (
            <li className="movie" key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img src={movie.poster} alt={movie.title} />

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