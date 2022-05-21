import { useEffect, useState } from "react"
import Button from "../UI/Button"
// import style from "./Hero.module.css"
import HeroStyled from "./Hero.styled"

function Hero() {

    const [movie, setMovie] = useState("")

    async function fetchMovie() {
        // melakukan side effect: fetch data movie api
        const response = await fetch(
            "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
        )
        // convert response to json
        const data = await response.json()
        
        setMovie(data)
    }

    useEffect(fetchMovie, [])

    return (
        <HeroStyled>
            <section>
                <div>
                    <h2>{movie.Title}</h2>
                    <h3>Genre: {movie.Genre}</h3>
                    <p>
                        {movie.Plot}
                    </p>
                    {/* <button>Watch</button> */}
                    <Button variant="secondary" size="md">Watch Movie</Button>
                </div>
                <div style={{flexBasis: '25%'}}>
                    <img 
                        src={movie.Poster} alt={movie.Title} 
                    />
                </div>
            </section>
        </HeroStyled>
    )
}

export default Hero