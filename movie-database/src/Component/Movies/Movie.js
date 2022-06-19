import style from "./Movie.module.css"
import MV from "../Movie/Movie"
import { useSelector } from "react-redux"

function Movie(props) {

    const {title} = props
    
    const movies = useSelector((store) => store.movies.movies)

    return(
        <div className={style.container}>
            <section className={style.movies}>
                <h2 className={style.movies__title}>{title || 'Lasted Movie'}</h2>
                <div className={style.movie__container}>
                    {
                        movies.map(function(movie){
                            return <MV key={movie.id} movie={movie} />
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Movie