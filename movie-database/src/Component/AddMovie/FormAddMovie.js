import { nanoid } from "nanoid"
import { useState } from "react"
import Alert from "../Alert/Alert"
import style from "./FormAddMovie.module.css"

function FormAddMovie(props){
    
    const {movies, setMovies} = props

    // membuat state object
    const [formData, setFromData] = useState({
        title: '',
        year: '',
        image: '',
        genre: ''
    })
    
    const {title, year, image, genre} = formData

    // membuat state untuk handle error
    const [formErr, setFormErr] = useState({
        etitle: false,
        eyear: false,
        eimage: false,
        egenre: false
    })

    const {etitle, eyear, eimage, egenre} = formErr

    // membuat fungsi handle
    function handleChange (e) {
        const {name, value} = e.target
        
        setFromData({
            ...formData,
            [name]: value
        })
    }

    function validate() {
        if (title === "") {
            setFormErr({etitle: true})
            return false
        } else if (year === "") {
            setFormErr({
                etitle: false,
                eyear: true
            })
            return false
        } else if(image === "") {
            setFormErr({
                etitle: false,
                eyear: false,
                eimage: true
            })
            return false
        } else {
            setFormErr({
                etitle: false,
                eyear: false,
                eimage: false,
                egenre: false
            })
            return true
        }
    }

    function addMovie() {
        const movie = {
            id: nanoid(),
            title: title,
            year: year,
            type: genre,
            poster: image
        }

        setMovies([...movies, movie])
    }

    function handleSubmit(e) {
        e.preventDefault()

        validate() && addMovie()
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
                            <input type="text" id="title" name="title" className={style.form__text} value={title} onChange={handleChange} />
                            {etitle && <Alert>Title is required</Alert>}
                            <label htmlFor="" className={style.text__left}>Year</label>
                            <input type="number" id="year" name="year" className={style.form__text} value={year} onChange={handleChange} />
                            {eyear && <Alert>Yers is required</Alert>}
                            <label htmlFor="" className={style.text__left}>Image</label>
                            <input type="text" id="image" name="image" className={style.form__text} value={image} onChange={handleChange}/>
                            {eimage && <Alert>Image is required</Alert>}
                            <label htmlFor="" className={style.text__left}>Genre</label>
                            <select className={style.form__text} id="genre" name="genre" onChange={handleChange}>
                                <option value="Drama">Drama</option>
                                <option value="Action">Action</option>
                                <option value="Trailer">Trailer</option>
                            </select>
                            {egenre && <Alert>Genre is required</Alert>}
                            <button className={style.form__button}>Watch</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormAddMovie