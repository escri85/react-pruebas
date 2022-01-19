import { NavLink } from "react-router-dom";
import "./Navbar.scss";
// import { Link } from "react-router-dom";
const Navbar = () => {

  


  return (
    <div>
      <ul>
        <li>
          <NavLink className={({isActive})=>isActive?'active':''} to='/contact'>contact</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>isActive?'active':''} to='/about'>about</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>isActive?'active':''} to='/dashboard'>dashboard</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>isActive?'active':''} to='/amigos'>Amigos</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>isActive?'active':''} to='/api'>api</NavLink>
        </li>
      </ul>
    </div>


    // <div>
    //   <h1>Home</h1>

    //   <nav>
    //     <Link to="/">Home</Link> | <Link to="about">About</Link>
    //   </nav>
    // </div>
  );
};
export default Navbar;
