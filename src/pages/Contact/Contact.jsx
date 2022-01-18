import { Link } from "react-router-dom";


const userID = 0

const Contact = () => {
    return (
        <div>
         <p>soy el contact</p> 
        <Link to='/home'>home</Link>
        <div>
        <Link to={`/about/${userID}`}>user</Link>
        
        </div>
        </div>
        
        );
}
 
export default Contact;