import { useEffect, useState } from "react";
import Logout from "../AllUserComponents/Logout";
import axiosConfig from "./../AllUserComponents/axiosConfig"
import CustomerTopBar from "./CustomerTopBar";

const CustomerHome=()=>{
    // const[user,setUser]=useState([]);
    // useEffect(()=>{
    //     axiosConfig.get("alluser/get").then((rsp)=>{
    //     setUser(rsp.data);
    //     debugger;
    //     },(err)=>{})
    // },[]);
    return(
        <div>
            <h3><CustomerTopBar/></h3>
            <center>
            <fieldset style={{width:"50%"}}>
                <center>
                    <button onClick={(e=>{window.location.href="/customer/home";})}>HOME</button>
                    <button onClick={(e=>{window.location.href="/customer/medlist";})}>MEDICINE LIST</button> 
                </center>           
            </fieldset>
            </center>
            <Logout/>
        </div>
    )
}
export default CustomerHome;