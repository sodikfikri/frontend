import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Hero from "../../Component/Hero/Hero"
import Movie from "../../Component/Movies/Movie"
import { updateMovies } from "../../features/movieSlice"
import {ENDPOINTS} from "../../utils/contanst/endpoints"

function TopRated() {
    // membuat dispatch
    const dispatch = useDispatch()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getTopRatedMovies()
    }, [])

    async function getTopRatedMovies() {
        // fetch data menggunakan axios
        const response = await axios(ENDPOINTS.TOPRATED)
        dispatch(updateMovies(response.data.results))
    }

    return (
        <div>
            <Hero />
            <Movie title="Top Rated" />
        </div>
    )
}

export default TopRated