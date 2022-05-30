import axios from "axios"
import { useEffect, useState } from "react"
import Hero from "../../Component/Hero/Hero"
import Movie from "../../Component/Movies/Movie"

function TopRated() {

    const API_KEY = process.env.REACT_APP_API_KEY
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`

    const [movies, setMovies] = useState([])
    const [pageTitle, setPageTitle] = useState("Top Rated")

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getTopRatedMovies()
    })

    async function getTopRatedMovies() {
        // fetch data menggunakan axios
        const response = axios(URL)

        setMovies((await response).data.results)
    }

    return (
        <div>
            <Hero />
            <Movie movies={movies} title={pageTitle} />
        </div>
    )
}

export default TopRated