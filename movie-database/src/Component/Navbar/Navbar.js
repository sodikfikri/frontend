import { Link } from "react-router-dom"
// import style from "./Navbar.module.css"
import NavbarStyled from "./Navbar.styled"

function Navbar() {
    return(
        <NavbarStyled>
            <nav>
                <div>
                    <h1>Movie App</h1>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/movie/created">Add Movie</Link>
                        </li>
                        <li>
                            <Link to="/movie/popular">Popular</Link>
                        </li>
                        <li>
                            <Link to='/movie/now'>Now Playing</Link>
                        </li>
                        <li>
                            <Link to="/movie/top">Top Rated</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </NavbarStyled>
    )
}

export default Navbar