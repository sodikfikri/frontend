import axios from "axios"
import { useEffect, useState } from "react"
import Hero from "../../Component/Hero/Hero"
import Movie from "../../Component/Movies/Movie"

function Popular() {

    const API_KEY = process.env.REACT_APP_API_KEY
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

    // membuat state movies
    const [movies, setMovies] = useState([])
    const [pageTitle, setPageTitle] = useState("Popular")

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getPopularMovies()
    }, [])

    async function getPopularMovies() {
        // fetch data menggunakan axios
        const response = await axios(URL)
        
        setMovies(response.data.results)
    }

    return (
        <div>
            <Hero/>
            <Movie movies={movies} title={pageTitle}/>
        </div>
    )
}

export default Popular