import Hello from "./Hello"

function Main() {
    return(
        // mengirim props dengan nama 'name'
        <main>
            <Hello name="Sodik"/>
            <Hello name="Rapip Nih Bos" />
            <Hello name="Akira" />
            <Hello name="Narul" />
            <Hello name="Fajar" />
        </main>
    )
}

export default Main