import { nanoid } from "nanoid"
import { useState } from "react"
import Alert from "../Alert/Alert"
import style from "./FormAddMovie.module.css"

function FormAddMovie(props){
    
    const {movies, setMovies} = props

    // membuat state
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [image, setImage] = useState("")
    const [genre, setGenre] = useState("")

    // membuat state untuk handle error
    const [isTitleError, setIsTitleError] = useState(false)
    const [isYearError, setIsYearError] = useState(false)
    const [isImageError, setIsImageError] = useState(false)
    const [isGenreError, setIsGenreError] = useState(false)

    // membuat fungsi handle
    function handleTitle(e) {
        setTitle(e.target.value)
    }

    function handleYear(e) {
        setYear(e.target.value)
    }

    function handleImage(e) {
        setImage(e.target.value)
    }
    function handleGenre(e) {
        setGenre(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        // jika title kosong maka set error title true

        if (title === "") {
            setIsTitleError(true)
        } else if (year === "") {
            setIsTitleError(false)
            setIsYearError(true)
        } else if(image === "") {
            setIsTitleError(false)
            setIsYearError(false)
            setIsImageError(true)
        } else {
            const movie = {
                id: nanoid(),
                title: title,
                year: year,
                type: genre,
                poster: image
            }
    
            setMovies([...movies, movie])
            setIsTitleError(false)
            setIsYearError(false)
            setIsImageError(false)
            setIsGenreError(false)
        }

    }

    return (
        <div className={style.container}>
            <div className={style.forms}>
                <div className={style.row}>
                    <div className={style.column}>
                        <img 
                            className={style.form__image}
                            src="https://picsum.photos/600/400" alt="" 
                        />
                    </div>
                    <h2 htmlFor="" className={style.form__title}>Add Movie</h2>
                    <div className={style.column}>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="" className={style.text__left}>Title</label>
                            <input type="text" id="title" className={style.form__text} value={title} onChange={handleTitle} />
                            {isTitleError && <Alert>Title is required</Alert>}
                            <label htmlFor="" className={style.text__left}>Year</label>
                            <input type="number" id="years" className={style.form__text} value={year} onChange={handleYear} />
                            {isYearError && <Alert>Yers is required</Alert>}
                            <label htmlFor="" className={style.text__left}>Image</label>
                            <input type="text" id="image" className={style.form__text} value={image} onChange={handleImage}/>
                            {isImageError && <Alert>Image is required</Alert>}
                            <label htmlFor="" className={style.text__left}>Genre</label>
                            <select className={style.form__text} id="" onChange={handleGenre}>
                                <option value="Drama">Drama</option>
                                <option value="Action">Action</option>
                                <option value="Trailer">Trailer</option>
                            </select>
                            {isGenreError && <Alert>Genre is required</Alert>}
                            <button className={style.form__button}>Watch</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormAddMovie