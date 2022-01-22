/* eslint-disable default-case */
import { useReducer } from "react";
import "./EjemploReducer.scss"

//estado inicial del reducer
const contadorInicial = { contador:0 }
//reducer escucha q tipo de accion teenmos en el dispatch
const reducer = (estado,accion)=>{
  switch (accion.tipo) {
    case "SUMAR":
      return { contador: estado.contador + 1 };

    case "RESTAR":
      return { contador: estado.contador - 1 };
    case "RESETEAR":
      return { contador: (estado.contador = 0) };
  }
}

const EjemploReducer = () => {



    //useReducer recibe dos parametros 1ºel reducer y 2º el estado inicial
    //se iguala a un arreglo el cual nos devuelve un estado y la funcion dispatch 

    const [estado,dispatch] = useReducer(reducer,contadorInicial)
    //a dispacth se le pasa una accion de como queremos trabajar con el estado
    //se define la accion por ejemplo sumar 
    // {tipo: 'SUMAR'}
    const funcSuma =()=>{dispatch({tipo: 'SUMAR'})}
    const funcResta = ()=>{dispatch({tipo: 'RESTAR'})}
    const resetear = ()=>{dispatch({tipo: 'RESETEAR'})}


    return ( 
    

    <div className="reducer">
    <h1>ejemplo de useReducer</h1>
    <p>contador:{estado.contador}</p>
    <button onClick={funcSuma}>sumar</button> 
    <button onClick={funcResta}>restar</button> 
    <button onClick={resetear}>resetear</button>
    </div>
    );
}
 
export default EjemploReducer;