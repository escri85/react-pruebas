import "./App.scss";
import { Footer, Card, Contador, Login } from "./components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Header/components";
import {About,UserPage,Dashboard,NotFound,Contact,Home,Amigos}from "./pages/index";
// import styled from 'styled-components'
import Titulo from "./pages/Titulo";
function App() {
  const car = {
    marca: "mercedes",
    modelo: "ranchera",
    año: 2018,
  };

  const año = 555;
  const coche = "bmw";

  const amigos =['julio','carla','sergio','lia']

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="welcome" element={<h1>welcome</h1>} />
            <Route path="goodbye" element={<h1>goodbye</h1>} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/amigos" element={<Amigos/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/about/:id" element={<UserPage />} />
          <Route path="/acercade" element={<Navigate to="/about" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <div className="contenedor">
        <Titulo>esto tiene style components</Titulo>
        <Titulo negro>esto utitliza style components con props</Titulo>
        {/* <Header /> */}
        <Card car={car} año={año} coche={coche} />
        <ul>
          {amigos.map((amigo)=><li>{amigo}</li>)}
        </ul>
        <Contador />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
 // ciclos de vida
  /* existen formas de saber si un componente se cargo aztualizo..
  ==>componentDidMount(){ ejemplo llamada api} señala q el componente se crago 
  ==>componentDidUpdate(){} señala cada vez q el componente cambia
  y tiene dor argumentos las propiedades del componente y su estado
  ==>componentWillUnmount(){ ejemplo acabamos llamada api} señala que el componente dejo de renderizarse
  */
 //REGLAS DE LOS HOOKS
 //-tienen que ir dentro de la funcion del componente
 //-no se pueden usar dentro de ciclos o condicionales