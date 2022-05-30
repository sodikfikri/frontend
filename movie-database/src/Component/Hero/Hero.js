import axios from "axios"
import { useEffect, useState } from "react"
import Button from "../UI/Button"
// import style from "./Hero.module.css"
import HeroStyled from "./Hero.styled"

function Hero() {

    const [movie, setMovie] = useState("")
    const API_KEY = process.env.REACT_APP_API_KEY
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ")
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`
    

    useEffect(getDetailMovie, [])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getTrendingMovies() { // mendapatkan 1 data trending movies
        const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
        const response = await axios(URL)
        
        return response.data.results[0]
    }

    //membuat fungsi untuk mendapatkan detail movie
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function getDetailMovie() {
        const trendingMovie = await getTrendingMovies()
        const id = trendingMovie.id
        
        // fetch detail movie by id
        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
        const response = await axios(URL)
        
        setMovie(response.data)
    }

    return (
        <HeroStyled>
            <section>
                <div>
                    <h2>{movie.title}</h2>
                    <h3>Genre: {genres}</h3>
                    <p>
                        {movie.overview}
                    </p>
                    {/* <button>Watch</button> */}
                    <Button as="a" href={trailer} target="_blank" variant="secondary" size="md">Watch Movie</Button>
                </div>
                <div>
                    <img 
                        src={movie.Poster || `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.Title} 
                    />
                </div>
            </section>
        </HeroStyled>
    )
}

export default Hero