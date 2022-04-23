import { useEffect, useState } from "react"
import style from "./Hero.module.css"

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
        <div className={style.container}>
            <section className={style.hero}>
                <div className={style.hero__left}>
                    <h2 className={style.hero__title}>{movie.Title}</h2>
                    <h3 className={style.hero__genre}>Genre: {movie.Genre}</h3>
                    <p className={style.hero__description}>
                        {movie.Plot}
                    </p>
                    <button className={style.hero__button}>Watch</button>
                </div>
                <div className={style.right}>
                    <img 
                        className={style.hero__image}
                        src={movie.Poster} alt={movie.Title} 
                    />
                </div>
            </section>
        </div>
    )
}

export default Hero