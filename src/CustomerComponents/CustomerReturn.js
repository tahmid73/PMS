import { useState } from "react";
import Logout from "../AllUserComponents/Logout";
import CustomerTopBar from "./CustomerTopBar";

const CustomerReturn = () => {
    const [items,setItems] = useState([]);
    return(
        <div>
            <CustomerTopBar/>

            <Logout/>
        </div>
    )
}

export default CustomerReturn;