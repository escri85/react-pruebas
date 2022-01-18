import {Link, Outlet,/*  Route,Routes, */ useNavigate } from "react-router-dom";
import styles from '../../components/Card/card.module.scss'

// import { Footer } from "../../components";


const Dashboard = () => {
    
    const navigate = useNavigate()

const handleclick = ()=>{
    //cuando se presiona el boton redirige a la path donde se quiera
    navigate('/about')
    console.log('funciona ¡el boton de hanldeclick');
}


    
    return <>
    <Link to='welcome'>
    soy el welcome
    </Link>
    <br />
    <Link to='goodbye'>
    soy el goddbye
    </Link>
    <h1>soy el dashboard</h1>
    <button className={styles.button} onClick={handleclick}>logout</button>
    {/* aqui puede ir la subruta pero es mejor en el routin de app*/}
    {/* <Routes>
    <Route path="welcome" element={<Footer/>}/>
</Routes> */}
<Outlet/>
    </>
}
 
export default Dashboard;