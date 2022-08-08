import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./AllUserComponents/Login";
import Registration from "./AllUserComponents/Registration";
import Home from "./AllUserComponents/Home";
import Top from "./AllUserComponents/Top";
import LoggedCourierTop from "./CourierComponents/LoggedCourierHome";
import LoggedCourierHome from "./CourierComponents/LoggedCourierHome";
import CustomerHome from "./CustomerComponents/CustomerHome";
import Logout from "./AllUserComponents/Logout";
import ShowMedicine from "./CustomerComponents/ShowMedicine";

const Main=()=>{
    return(
        <BrowserRouter>
        {/* <h2><Top/></h2> */}
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Registration" element={<Registration/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/courier/home" element={<LoggedCourierHome/>}/>
            <Route path="/customer/home" element={<CustomerHome/>}/>
            <Route path="/customer/medlist" element={<ShowMedicine/>}/>
        </Routes>
        {/* <Logout/> */}
        </BrowserRouter>
    )
}
export default Main;