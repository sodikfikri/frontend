import Hero from "../Component/Hero/Hero"
import Movie from "../Component/Movies/Movie"
import FormAddMovie from "../Component/AddMovie/FormAddMovie"
import { useState } from "react"
import data from "../utils/contanst/data"

function Home(){
    const [movies, setMovies] = useState(data)

    return(
        <div>
            <Hero />
            <Movie movies={movies} setMovies={setMovies}/>
            <FormAddMovie movies={movies} setMovies={setMovies} />
        </div>
    )
}

export default Home