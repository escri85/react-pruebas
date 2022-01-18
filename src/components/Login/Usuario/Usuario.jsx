
const user = {
    nombre: 'Sergio',
    apellido: 'Escribano',
    dni:111222333
}

const Usuario = ()=>{
    return <div>
        <p>Nombre:{user.nombre}</p>
        <p>Apellido:{user.apellido}</p>
        <p>DNI:{user.dni}</p>


    </div>
}


export default Usuario