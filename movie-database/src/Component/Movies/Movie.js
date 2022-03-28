import style from "./Movie.module.css"
import MV from "../Movie/Movie"
import data from "../../utils/contanst/data"
import { useState } from "react"
import { nanoid } from "nanoid"

function Movie() {

    // set state
    // state mengembalikan 2 data: data saat ini dan fungsi untuk mengubah state
    const [movies, setMovies] = useState(data)
    
    function tambahnFilm(){
        // logic
        const movie = {
            id: nanoid(5),
            title: 'Jhon Wick 3',
            year: '2021',
            type: 'Movie',
            poster: 'https://picsum.photos/seed/picsum/300/400            '
        }
        // push data to stata
        // ...movies = spread => untuk copy data movies
        setMovies([...movies, movie]);

    }

    return(
        <div className={style.container}>
            <section className={style.movies}>
                <h2 className={style.movies__title}>Latest Movies</h2>
                <div className={style.movie__container}>

                    {/* 
                        looping data movies  
                    */}
                    {
                        movies.map(function(movie){
                            return <MV key={movie.id} movie={movie} />
                        })
                    }

                </div>
                {/* menambahkan event on click */}
                <button onClick={tambahnFilm}>Add Movie</button>
            </section>
        </div>
    )
}

export default Movie