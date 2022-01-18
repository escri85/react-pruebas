import { useState,useEffect } from "react";

const Amigos = () => {
    const grupo = ["jose", "carlos", "pepe", "juan"];

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
    })

    const [newGrupo, setgrupo] = useState(grupo);

  const changeName = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setgrupo(["david", "cris", "luis"]);
  };

  return (
    <>
      <ul>
        {newGrupo.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={changeName}>cambiar nombres</button>
    </>
  );
};

export default Amigos;