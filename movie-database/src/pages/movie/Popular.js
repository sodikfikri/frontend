import axios from "axios"
import { useEffect, useState } from "react"
import Hero from "../../Component/Hero/Hero"
import Movie from "../../Component/Movies/Movie"
import { ENDPOINTS } from "../../utils/contanst/endpoints"

function Popular() {


    // membuat state movies
    const [movies, setMovies] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getPopularMovies()
    }, [])

    async function getPopularMovies() {
        // fetch data menggunakan axios
        const response = await axios(ENDPOINTS.POPULAR)
        
        setMovies(response.data.results)
    }

    return (
        <div>
            <Hero/>
            <Movie movies={movies} title="Popular"/>
        </div>
    )
}

export default Popular