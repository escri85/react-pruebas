import { useState } from "react"

import Foto from "./components/Foto";
const estadoInicial = {
  name: "",
  lastName: "",
  number: "",
  photo: "",
};

const FormularioRegistro = (props) => {
  
  const [estadoFinal, setEstado] = useState(estadoInicial);
  const handleInput = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { name, value } = e.target;
    setEstado({ ...estadoFinal, [name]: value });
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    const {name,lastName,number,photo}=estadoFinal
    if(!name||!lastName||!number||!photo){
      console.log('rellena todos los campos');
      return
    }
    console.log(estadoFinal);
    props.añadirPerfil(estadoFinal)
    setEstado(estadoInicial)
  };
  return (
    <>
      <div>
        <h1>FORMULARIO</h1>
      </div>
      <form onSubmit={onSubmit}>
        <fieldset>
          <label htmlFor="name">
            <p>nombre</p>
            <input
              type="text"
              name="name"
              value={estadoFinal.name}
              onChange={handleInput}
            />
          </label>
          <label hmlFor="lastName">
            <p>Apellidos</p>
            <input
              type="text"
              name="lastName"
              value={estadoFinal.lastName}
              onChange={handleInput}
            />
          </label>
          <label htmlFor="number">
            <p>numero</p>
            <input
              type="text"
              name="number"
              value={estadoFinal.number}
              onChange={handleInput}
            />
          </label>
          <label htmlFor="photo">
            <p>Imagen</p>
            <Foto
              type="text"
              name="photo"
              value={estadoFinal.photo}
              onChange={handleInput}
            />
          </label>
          <div style={{ padding: "20px" }}>
          {estadoFinal.photo ? (
            <img src={estadoFinal.photo} alt={estadoFinal.name} width="200px" />
          ) : null}
 </div>
        </fieldset>
        <button type="submit">enviar formulario al listado</button>
      </form>
    </>
  );
};

export default FormularioRegistro;
