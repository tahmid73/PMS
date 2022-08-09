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
import CustomerCart from "./CustomerComponents/CustomerCart";
import ShowMed from "./ManagerComponents/ShowMed";
import ShowUser from "./ManagerComponents/ShowUser";
import CustomerGrandtotal from "./CustomerComponents/CustomerGrandtotal";
import CustomerOrderPlaced from "./CustomerComponents/CustomerOrderPlaced";
import CustomerOrders from "./CustomerComponents/CustomerOrders";
import CustomerReturn from "./CustomerComponents/CustomerReturn";

const Main=()=>{
    return(
        <BrowserRouter>
        {/* <h2><Top/></h2> */}
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Registration" element={<Registration/>}/>
            <Route path="/home" element={<Home/>}/>
            
            {/* COURIER--->TAHMID */}
            <Route path="/courier/home" element={<LoggedCourierHome/>}/>

            {/* CUSTOMER ---> AYESHA */}
            <Route path="/customer/home" element={<CustomerHome/>}/>
            <Route path="/customer/medlist" element={<ShowMedicine/>}/>
            <Route path="/customer/cart" element={<CustomerCart/>}/>
            <Route path="/customer/cart/grandtotal" element={<CustomerGrandtotal/>}/>
            <Route path="/customer/orderplaced" element={<CustomerOrderPlaced/>}/>
            <Route path="/customer/orders" element={<CustomerOrders/>}/>
            <Route path="/customer/return" element={<CustomerReturn/>}/>

            {/* MANAGER ---> MANAGER */}
            <Route path="/manager/medicine" element={<ShowMed/>}/>
            <Route path="/manager/user" element={<ShowUser/>}/>
        </Routes>
        {/* <Logout/> */}
        </BrowserRouter>
    )
}
export default Main;