import TopBar from './TopBar';
import {Link} from 'react-router-dom';
const LoggedCourierTop=()=>{
    return(
        <div className='bg-black'>
            <TopBar url="/home" value="Home"/>
            <TopBar url="/logout" value="Logout"/>
        </div>
    )
}

export default LoggedCourierTop;