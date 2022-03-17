// membuat komponen
// mencetak ui element

function Hello(props) {
    // diluat return adalan js biasa
    const {name} = props

    // didalam return adalah jsx
    return (
        <div className="hello">
            <h2>Hello react</h2>
            <p>{name} - Sofware Engineer</p>
        </div>
    )
}

function Header() {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

function Main() {
    return(
        // mengirim props dengan nama 'name'
        <main>
            <Hello name="Sodik"/>
            <Hello name="Rapip" />
            <Hello name="Akira" />
            <Hello name="Narul" />
            <Hello name="Fajar" />
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <h2>Copy right - Fikri</h2>
            <p>Create By React JS</p>
        </footer>
    )
}

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

// ReactDOM.render(judul,document.getElementById("root"))
// render komponen

ReactDOM.render(<App />, document.getElementById("root"))