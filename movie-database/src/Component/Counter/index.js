import { useEffect, useState } from "react"

function Counter () {

    const [angka, setAngka] = useState(0)

    function addAngka() {
        setAngka(angka+1)
    }

    // useEffect -> useEffect akan di jalankan setelah component di render
    function updateDom() {
        // melakukan side effect: access dom
        document.title = `Hasil: ${angka}`
    }

    useEffect(updateDom, [angka]) // parameter ke 2 akan menjalankan useEffect ketika state di update

    return (
        <div>
            <p>Hasil: {angka}</p>
            <button onClick={addAngka}>Add</button>
        </div>
    )
}

export default Counter