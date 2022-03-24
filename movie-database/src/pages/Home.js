import Navbar from "../Component/Navbar/Navbar"
import Footer from "../Component/Footer/Footer"
import Hero from "../Component/Hero/Hero"
import Movie from "../Component/Movies/Movie"
import FormAddMovie from "../Component/AddMovie/FormAddMovie"

function Home(){
    return(
        <div>
            <Navbar />
            <Hero />
            <Movie />
            <FormAddMovie />
            <Footer />
        </div>
    )
}

export default Home