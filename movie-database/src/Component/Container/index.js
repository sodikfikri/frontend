import style from './index.module.css'

function Container (props) {
    return (
        <div className={style.container}>
            {props.children}
        </div>
    )
}

export default Container