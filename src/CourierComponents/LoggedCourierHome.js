import {Link} from 'react-router-dom';
import LoggedCourierTop from "./LoggedCourierTop";
import Top from "../AllUserComponents/Top";
// import "../index.css"

const LoggedCourierHome=()=>{
    return(
        <div className="">
            <h2>
            <LoggedCourierTop/>
            </h2>
            <h1 className="text-4xl text-center">hello</h1>
        </div>
    )
}

export default LoggedCourierHome;