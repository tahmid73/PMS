import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./AllUserComponents/Login";
import Registration from "./AllUserComponents/Registration";
import Home from "./AllUserComponents/Home";
import LoggedCourierHome from "./CourierComponents/LoggedCourierHome";
import ViewOrders from "./CourierComponents/ViewOrders";
import CustomerHome from "./CustomerComponents/CustomerHome";
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
import CustomerProfile from "./CustomerComponents/CustomerProfile";
import CustomerProfileUpdate from "./CustomerComponents/CustomerProfileUpdate";
import ShowContract from "./ManagerComponents/ShowContract";
import ShowQuery from "./ManagerComponents/ShowQuery";
import ShowAccount from "./ManagerComponents/ShowAccount";
import SearchBar from "./ManagerComponents/SearchBar";
import ForgetPassword from "./AllUserComponents/ForgetPassword";
import VerifyOTP from "./AllUserComponents/VerifyOTP";
import SetPassword from "./AllUserComponents/SetPassword";
import SetCustomerPassword from "./CustomerComponents/SetCustomerPassword";
import CustomerComplain from "./CustomerComponents/CustomerComplain";
import CustomerChart from "./CustomerComponents/CustomerChart";

const Main=()=>{
    return(
        <BrowserRouter>
        {/* <h2><Top/></h2> */}
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Registration" element={<Registration/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/forgotpassword" element={<ForgetPassword/>}/>
            <Route path="/send/otp/:email" element={<VerifyOTP/>}/>
            <Route path="/set/password/:email" element={<SetPassword/>}/>
            
            {/* COURIER--->TAHMID */}
            <Route path="/courier/home" element={<LoggedCourierHome/>}/>
            <Route path="/courier/ViewOrders" element={<ViewOrders/>}/>
            <Route path="/courier/AcceptedOrders" element={<AcceptedOrders/>}/>

            {/* CUSTOMER ---> AYESHA */}
            <Route path="/customer/home" element={<CustomerHome/>}/>
            <Route path="/customer/profile" element={<CustomerProfile/>}/>
            <Route path="/customer/profile/update" element={<CustomerProfileUpdate/>}/>
            <Route path="/set/password/customer/:email" element={<SetCustomerPassword/>}/>
            <Route path="/customer/medlist" element={<ShowMedicine/>}/>
            <Route path="/customer/cart" element={<CustomerCart/>}/>
            <Route path="/customer/cart/grandtotal" element={<CustomerGrandtotal/>}/>
            <Route path="/customer/orderplaced" element={<CustomerOrderPlaced/>}/>
            <Route path="/customer/orders" element={<CustomerOrders/>}/>
            <Route path="/customer/return" element={<CustomerReturn/>}/>
            <Route path="/customer/complain" element={<CustomerComplain/>}/>
            <Route path="/customer/chart" element={<CustomerChart/>}/>

            {/* MANAGER ---> MANAGER */}
            <Route path="/manager/medicine" element={<ShowMed/>}/>
            <Route path="/manager/user" element={<ShowUser/>}/>
            <Route path="/manager/home" element={<ManagerHome/>}/>
            <Route path="/manager/orders" element={<ShowOrders/>}/>
            <Route path="/manager/supply" element={<ShowSupply/>}/>
            <Route path="/manager/cart" element={<ShowCart/>}/>
            <Route path="/manager/cart/table" element={<ViewCart/>}/>
            <Route path="/manager/contract" element={<ShowContract/>}/>
            <Route path="/manager/query" element={<ShowQuery/>}/>
            <Route path="/manager/account" element={<ShowAccount/>}/>
            <Route path="/manager/searching" element={<SearchBar/>}/>
        </Routes>
        {/* <Logout/> */}
        </BrowserRouter>
    )
}
export default Main;