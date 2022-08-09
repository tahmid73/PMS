import { useEffect, useState } from "react";
import Logout from "../AllUserComponents/Logout";
import axiosConfig from "./../AllUserComponents/axiosConfig"
import CustomerTopBar from "./CustomerTopBar";
import ShowMedicine from "./ShowMedicine";

const CustomerHome=()=>{
    return(
        <div>
            {/* <center>
            <fieldset style={{width:"50%"}}>
                <center>
                    <button onClick={(e=>{window.location.href="/customer/home";})}>HOME</button>
                    <button onClick={(e=>{window.location.href="/customer/medlist";})}>MEDICINE LIST</button> 
                </center>           
            </fieldset>
            </center> */}
            <ShowMedicine/>
        </div>
    )
}
export default CustomerHome;