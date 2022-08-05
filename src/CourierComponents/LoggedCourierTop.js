import TopBar from '../AllUserComponents/TopBar';
import {Link} from 'react-router-dom';
const LoggedCourierTop=()=>{
    return(
        <div>
            <TopBar url="/home" value="Home"/>
            {/* <TopBar url="/logout" value="Logout"/> */}
        </div>
    )
}

export default LoggedCourierTop;