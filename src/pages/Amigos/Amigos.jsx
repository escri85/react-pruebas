import { useState,useEffect } from "react";
import './Amigos.scss'
const Amigos = () => {
  
  //useEffect es una funcion con un parentesis y una arrowfunction dentro
  //equivale a didMount didUpdate
  //este hook se ejecuta ccada vez que se renderiza
  /* useEffect(()=>{
    console.log('el componente se renderizo')
  }) */
  //para que se ejecute una sola vez denro del parentesis como segundo argumento se coloca un [] esto serviria para conectar la api
  /* useEffect(()=>{
    console.log('el componente se renderizo')
  },[]) */
  //para que se ejcute cada vez que cambie se el estado de usestate se pone la variable de usestate dentro de [] en este caso por ejemplo newGRupo
  /* useEffect(()=>{
    console.log('el componente se renderizo')
  },[newGrupo]) */
  //para que el codigo q va dentro se ejecute cuando se quite el componente se mete un return(()=>{}) dentro de su arrowfunction
  //esto serviria para desconectar la api
  
  useEffect(()=>{
    console.log('el componente se renderizo')
    return(()=>{
      console.log('este codigo se ejecuta al dejar de renderizar el componente');
    })
  },[])
  const grupo = ["jose", "carlos", "pepe", "juan"];
//si se quiere inicializar usetate vacio se coloca un[]
    const [newGrupo, setgrupo] = useState(grupo);

  const changeName = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setgrupo(["david", "cris", "luis"]);
  };

const changeOriginalName = ()=>{
  setgrupo(grupo)
}

  return (
    <div className="amigos">
    <h5>aqui esta el ejemplo de useEffect mostrado por consola</h5>
      <ul>
        {newGrupo.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={changeName}>cambiar nombres</button>
      <button onClick={changeOriginalName}>cambiar a nombre originales</button>
    </div>
  );
};

export default Amigos;
