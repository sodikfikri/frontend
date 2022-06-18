import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Hero from "../../Component/Hero/Hero"
import Movie from "../../Component/Movies/Movie"
import { updateMovies } from "../../features/movieSlice"
import { ENDPOINTS } from "../../utils/contanst/endpoints"

function Popular() {
    // membuat state movies
    // membuat dispatch
    const dispatch = useDispatch()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getPopularMovies()
    }, [])

    async function getPopularMovies() {
        // fetch data menggunakan axios
        const response = await axios(ENDPOINTS.POPULAR)
        
        dispatch(updateMovies(response.data.results))
    }

    return (
        <div>
            <Hero/>
            <Movie title="Popular"/>
        </div>
    )
}

export default Popular