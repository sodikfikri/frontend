import axios from "axios"
import { useEffect, useState } from "react"
import Hero from "../../Component/Hero/Hero"
import Movie from "../../Component/Movies/Movie"
import {ENDPOINTS} from "../../utils/contanst/endpoints"

function NowPlaying() {


    const [movies, setMovies] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getNowPlayingMovies()
    }, [])

    async function getNowPlayingMovies() {
        // fetch data menggunakan axios
        const response = await axios(ENDPOINTS.NOWPLAYING)

        setMovies(response.data.results)
    }
    // console.log(movies);
    return (
        <div>
            {/* <h2>Now Playing</h2> */}
            <Hero/>
            <Movie movies={movies} title="Now Playing" />
        </div>
    )
}

export default NowPlaying