import axios from "axios"
import { useEffect, useState } from "react"
import Hero from "../../Component/Hero/Hero"
import Movie from "../../Component/Movies/Movie"

function NowPlaying() {

    const API_KEY = process.env.REACT_APP_API_KEY
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`

    const [movies, setMovies] = useState([])
    const [pageTitle, setPageTitle] = useState("Now Playing")

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getNowPlayingMovies()
    }, [])

    async function getNowPlayingMovies() {
        // fetch data menggunakan axios
        const response = await axios(URL)

        setMovies(response.data.results)
    }
    // console.log(movies);
    return (
        <div>
            {/* <h2>Now Playing</h2> */}
            <Hero/>
            <Movie movies={movies} title={pageTitle} />
        </div>
    )
}

export default NowPlaying