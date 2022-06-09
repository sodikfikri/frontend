import axios from "axios"
import { useEffect, useState } from "react"
import Hero from "../../Component/Hero/Hero"
import Movie from "../../Component/Movies/Movie"
import {ENDPOINTS} from "../../utils/contanst/endpoints"

function TopRated() {

    const [movies, setMovies] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getTopRatedMovies()
    })

    async function getTopRatedMovies() {
        // fetch data menggunakan axios
        const response = axios(ENDPOINTS.TOPRATED)

        setMovies((await response).data.results)
    }

    return (
        <div>
            <Hero />
            <Movie movies={movies} title="Top Rated" />
        </div>
    )
}

export default TopRated