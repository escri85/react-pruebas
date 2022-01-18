import { useState } from "react"
import styles from './card.module.scss'

const cocheInicial={
    marca:'audi',
    modelo:'avant',
    año:2004
}

const Card=(props)=>{
console.log(props);
const{car,coche}= props

// se crean las variables y se igulan a userState pasando como parametroi el valor inicial
const [cocheNuevo,setmodel] = useState(cocheInicial)



const changeModel=(e)=>{
    e.preventDefault();
    setmodel({
...cocheInicial,
modelo:'infiniti'
    })
}
const changeYear = ()=>{
    setmodel(
      {  ...car,
        marca:'buggati',
    año:8888}
    )
}



    return <div>
        <p>{coche}</p>
        <p>marca:{cocheNuevo.marca}</p>
        <p>modelo:{cocheNuevo.modelo}</p>
        <p>año:{cocheNuevo.año}</p>
        <button onClick={changeModel}>cambiar modelo</button>
        <button className={styles.button} onClick={changeYear}>cambiar marca y año</button>

    </div>
}
export default Card