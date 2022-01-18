import { useParams } from "react-router-dom";






const UserPage = () => {

const {id} = useParams()


console.log(id
    );
    return ( <div>
        usuario{id}
    </div> );
}
 
export default UserPage;


