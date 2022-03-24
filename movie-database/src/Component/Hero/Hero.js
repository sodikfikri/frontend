import style from "./Hero.module.css"

function Hero() {
    return (
        <div className={style.container}>
            <section className={style.hero}>
                <div className={style.hero__left}>
                    <h2 className={style.hero__title}>Superman</h2>
                    <h3 className={style.hero__genre}>Genre: Drama, Trailler</h3>
                    <p className={style.hero__description}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, dignissimos maiores laborum delectus mollitia provident? Eum nisi quae nam obcaecati.
                    </p>
                    <button className={style.hero__button}>Watch</button>
                </div>
                <div className={style.right}>
                    <img 
                        className={style.hero__image}
                        src="https://picsum.photos/600/400" alt="" 
                    />
                </div>
            </section>
        </div>
    )
}

export default Hero