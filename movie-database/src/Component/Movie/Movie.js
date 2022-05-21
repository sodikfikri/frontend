// import style from "./Movie.module.css"
import MovieStyled from "./Movie.styled"

function Movie(props) {
    // destructing
    const {movie} = props
    return (
        <MovieStyled>
            <img
                src={movie.poster}
                alt=""
            />
            <h3>{movie.title}</h3>
            <p>{movie.type}</p>
            <p>{movie.year}</p>
        </MovieStyled>
    )
}

export default Movie