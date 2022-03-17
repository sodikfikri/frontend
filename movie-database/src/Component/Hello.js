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

export default Hello