import { useState } from "react";
import FormularioRegistro from "../Formulario/FormularioRegistro";
import './ListadoRegistros.scss'
const ListadoRegistros = () => {

const [perfiles,setPerfiles]=useState([])


const añadirPerfil = (perfil)=>{
const nuevoPerfil = [...perfiles,perfil]
setPerfiles(nuevoPerfil)
}



    return ( 
        <>
    <FormularioRegistro añadirPerfil={añadirPerfil}/>

    
    <div className="listado">
        {perfiles.map((perfil)=>{return (<div key={JSON.stringify(perfil)}>
            <h3>{perfil.name} {perfil.lastName}</h3>
            <p>Numero:{perfil.number}</p>
            <img src={perfil.photo} alt="" width="200" />
        </div>)
        })}
    </div>
        </>
        );
}
 
export default ListadoRegistros;