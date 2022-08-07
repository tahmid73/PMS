import TopBar from '../AllUserComponents/TopBar';
import logout from "../AllUserComponents/Logout";
import {Link} from 'react-router-dom';
const LoggedCourierTop=()=>{
    return(
        <div>
            <ul>
                <li><TopBar url="/courier/home" value="Home "/></li>
                <div>
                <li><button onClick={logout} value={"LOGOUT"} className="button button1 ">LOGOUT</button></li>
                </div>
            </ul>
        </div>
    )
}

export default LoggedCourierTop;