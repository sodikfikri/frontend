// import style from "./Movie.module.css"
import { Link } from "react-router-dom"
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
            <Link to={`/movie/${movie.id}`}>
                <h3>{movie.title}</h3>
            </Link>
            <p>{movie.type}</p>
            <p>{movie.year || movie.release_date}</p>
        </MovieStyled>
    )
}

export default Movie