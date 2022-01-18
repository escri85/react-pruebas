import Usuario from "./Usuario/Usuario";
import { useState } from "react";
import FormularioInicioSesion from "./Formulario/FormularioInicioSesion";
import ListadoRegistros from "./ListadoRegistros/ListadoRegistros";

const Login = () => {


//se crea una constante donde tiene un arreglo y como 1º argu. es el nombre de la variable
//  y el 2º es la funcion que ejecuta el cambio de estado de esa variable
// igualado al estado y entre () su estado inicial
  const [sesion,cambiarEstadoSesion] = useState(true)

  const iniciarSesion =()=> cambiarEstadoSesion(false)
  // const cerrarSesion =()=> cambiarEstadoSesion(true)

  return (
    <div>
      {sesion === true ? (
        <div>
          <Usuario />
          <button onClick={iniciarSesion}>Cerrar sesion</button>
          <ListadoRegistros/>
        </div>
      ) : (
        <>
          <p>no has iniciado sesion</p>
        <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion}/>
          {/* <button onClick={cerrarSesion}>Iniciar sesion</button> */}
        </>
      )}
    </div>
  );
};

export default Login;
