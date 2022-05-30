// import style from "./Movie.module.css"
import MovieStyled from "./Movie.styled"

function Movie(props) {
    // destructing
    const {movie} = props
    
    return (
        <MovieStyled>
            <img
                src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt=""
            />
            <h3>{movie.title}</h3>
            <p>{movie.type}</p>
            <p>{movie.year || movie.release_date}</p>
        </MovieStyled>
    )
}

export default Movie