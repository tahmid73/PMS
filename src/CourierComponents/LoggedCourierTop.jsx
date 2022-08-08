import TopBar from '../AllUserComponents/TopBar';
import logout from "../AllUserComponents/Logout";
import {Link} from 'react-router-dom';
import Logout from '../AllUserComponents/Logout';
const LoggedCourierTop=()=>{
    return(
        <div>
            <ul>
                <li><TopBar url="/courier/home" value="Home "/></li>
                <li><button onClick={logout} value={"LOGOUT"} className="button button1 ">LOGOUT</button></li>
                <Logout/>
            </ul>
        </div>
    )
}

export default LoggedCourierTop;