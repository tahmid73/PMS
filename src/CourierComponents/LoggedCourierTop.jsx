import TopBar from '../AllUserComponents/TopBar';
import logout from "../AllUserComponents/Logout";
import {Link} from 'react-router-dom';
import Logout from '../AllUserComponents/Logout';
import axiosConfig from "./../AllUserComponents/axiosConfig"

const LoggedCourierTop=()=>{
    const logout=()=>{
        axiosConfig.post("logout").then
        ((rsp)=>{
            debugger;
            window.location.href="/";
        },(error)=>{
    
        })
        }
    return(
        <div>
            <Logout/>
                <div>
                <TopBar url="/courier/home" value="Home "/>
                <TopBar url="/courier/AcceptedOrders" value="Accepted Orders"/>
                <TopBar url="/courier/ViewOrders" value="Orders"/> 
                <TopBar url="/courier/cashout" value="Cash Out"/> 
                <TopBar url="/courier/Profile" value="Profile"/> 
                {/* <button onClick={logout} value={"LOGOUT"}>LOGOUT</button>  */}
                </div>

        </div>
    )
}

export default LoggedCourierTop;