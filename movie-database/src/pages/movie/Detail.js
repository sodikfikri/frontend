import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DetailMovie from "../../Component/DetailMovie"
import Movie from "../../Component/Movies/Movie"
import { API_KEY, BASE_URL } from "../../utils/contanst/endpoints"

function Detail() {

    const params = useParams()
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getRecommendationMovies()
    }, [params.id])

    async function getRecommendationMovies() {
        const URL = `${BASE_URL}/movie/${params.id}/recommendations?api_key=${API_KEY}`

        const response = await axios(URL)
        setMovies(response.data.results)
    }

    return (
        <>
            <DetailMovie />
            <Movie movies={movies} title="Recommendations" />
        </>
    )
}

export default Detail