import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import DetailMovie from "../../Component/DetailMovie"
import Movie from "../../Component/Movies/Movie"
import { updateMovies } from "../../features/movieSlice"
import { API_KEY, BASE_URL } from "../../utils/contanst/endpoints"

function Detail() {

    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        getRecommendationMovies()
    }, [params.id])

    async function getRecommendationMovies() {
        const URL = `${BASE_URL}/movie/${params.id}/recommendations?api_key=${API_KEY}`

        const response = await axios(URL)
        dispatch(updateMovies(response.data.results))
    }

    return (
        <>
            <DetailMovie />
            <Movie title="Recommendations" />
        </>
    )
}

export default Detail