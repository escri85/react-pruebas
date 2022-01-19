import { useEffect, useState } from "react";

const Api = () => {

  const BASEURL = 'https://rickandmortyapi.com/api/character'
    const [personajes,establecerPersonajes]=useState([])


useEffect(()=>{
    fetch(BASEURL)
    .then(response=>response.json())
    .then(resultado=>establecerPersonajes(resultado.results))
    
},[])
const fav=(e)=>{
}
return <div>
    
    <h5>hola soy la api</h5>
    
    {personajes.map(personaje=>
    
    <div>
<li>{personaje.name}</li>
<img src={personaje.image} alt="" />
  <button onClick={fav}>fav</button>

    </div>
    )}
    
</div>





//   const BASEURL = "https://rickandmortyapi.com/api/character";
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch(BASEURL)
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
//   }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.name}
//           </li>
//         ))}
//       </ul>
//     );
//   }
};

export default Api;
