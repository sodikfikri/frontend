import style from "./FormAddMovie.module.css"

function FormAddMovie(){
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
                        
                        <label htmlFor="" className={style.text__left}>Title</label>
                        <input type="text" className={style.form__text} />
                        <label htmlFor="" className={style.text__left}>Year</label>
                        <input type="text" className={style.form__text} />
                        <button className={style.form__button}>Watch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormAddMovie