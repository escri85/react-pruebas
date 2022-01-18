import { useState } from "react";

const FormularioInicioSesion = (props) => {
  console.log(props);
  //estados
  const [usuario, cambiarUsuario] = useState("");

  const [password, cambiarPassword] = useState("");

  //e capta el evento
  // target el input y despues va el atributo del input(value,name...)
  //estas funciones se sustituyen con la constante onChange
  //   si se quiere utitlizar estas funciones deberiamos poner en el onghange del input el nombre de estas funciones
  //   const changePass = (e) => {
  //     cambiarPassword(e.target.value);
  //   };
  //   const changeUser = (e) => {
  //     cambiarUsuario(e.target.value);
  //   };


 

  const onchange = (e) => {
    if (e.target.name === "usuario") {
      cambiarUsuario(e.target.value);
    } else if (e.target.name === "password") {
      cambiarPassword(e.target.value);
    }
  };

  const onSubmit = (e) => {
    //   con esta linea evitamos q la pagina se recarge
    e.preventDefault();
    if (usuario === "sergio" && password === "1234") {
      props.cambiarEstadoSesion(true);
    } else {
      alert("los datos no son correctos");
      //reseteamos el estado de los campos a vacios
      cambiarUsuario('')
      cambiarPassword('')
    }
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <p>usuario:{usuario}</p>
      <p>contraseña:{password}</p>
      <div>
        <label htmlFor="usuario">usuario</label>
        <input
          type="text"
          name="usuario"
          id="usuario"
          value={usuario}
          onChange={onchange}
        />
      </div>
      <div>
        <label htmlFor="password">contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onchange}
        />
      </div>
      <button type="submit">iniciar sesion</button>
    </form>
  );
};

export default FormularioInicioSesion;
