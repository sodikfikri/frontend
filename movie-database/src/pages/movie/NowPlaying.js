import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Hero from "../../Component/Hero/Hero"
import Movie from "../../Component/Movies/Movie"
import { updateMovies } from "../../features/movieSlice"
import {ENDPOINTS} from "../../utils/contanst/endpoints"

function NowPlaying() {
    // membuat dispatch
    const dispatch = useDispatch()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getNowPlayingMovies()
    }, [])

    async function getNowPlayingMovies() {
        // fetch data menggunakan axios
        const response = await axios(ENDPOINTS.NOWPLAYING)

        dispatch(updateMovies(response.data.results))
    }
    // console.log(movies);
    return (
        <div>
            {/* <h2>Now Playing</h2> */}
            <Hero/>
            <Movie title="Now Playing" />
        </div>
    )
}

export default NowPlaying