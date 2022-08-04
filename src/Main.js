import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./AllUserComponents/Login";
import Registration from "./AllUserComponents/Registration";
import Home from "./AllUserComponents/Home";
import Top from "./AllUserComponents/Top";
import TopBar from "./AllUserComponents/TopBar";
import LoggedCourierTop from "./CourierComponents/LoggedCourierHome";
import LoggedCourierHome from "./CourierComponents/LoggedCourierHome";
import './index.css';
const Main=()=>{
    return(
        <BrowserRouter>
        <h3><Top/></h3>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Registration" element={<Registration/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/courier/home" element={<LoggedCourierHome/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Main;