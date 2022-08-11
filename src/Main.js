import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./AllUserComponents/Login";
import Registration from "./AllUserComponents/Registration";
import Home from "./AllUserComponents/Home";
import Top from "./AllUserComponents/Top";
import LoggedCourierTop from "./CourierComponents/LoggedCourierHome";
import LoggedCourierHome from "./CourierComponents/LoggedCourierHome";
import ViewOrders from "./CourierComponents/ViewOrders";
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
import ManagerHome from "./ManagerComponents/ManagerHome";
import ShowOrders from "./ManagerComponents/ShowOrders";
import ShowSupply from "./ManagerComponents/ShowSupply";
import ShowCart from "./ManagerComponents/ShowCart";
import ViewCart from "./ManagerComponents/ViewCart";
import AcceptedOrders from "./CourierComponents/AcceptedOrders";

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
            <Route path="/courier/ViewOrders" element={<ViewOrders/>}/>
            <Route path="/courier/AcceptedOrders" element={<AcceptedOrders/>}/>

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
            <Route path="/manager/home" element={<ManagerHome/>}/>
            <Route path="/manager/orders" element={<ShowOrders/>}/>
            <Route path="/manager/supply" element={<ShowSupply/>}/>
            <Route path="/manager/cart" element={<ShowCart/>}/>
            <Route path="/manager/cart/table" element={<ViewCart/>}/>
        </Routes>
        {/* <Logout/> */}
        </BrowserRouter>
    )
}
export default Main;