import axios from "axios";
import { useEffect, useState } from "react";
import Logout from "../AllUserComponents/Logout";
import axiosConfig from "./../AllUserComponents/axiosConfig"

const CustomerHome=()=>{
    const[user,setUser]=useState([]);
    useEffect(()=>{
        axiosConfig.get("alluser/get").then((rsp)=>{
        setUser(rsp.data);
        debugger;
        },(err)=>{})
    },[]);
    return(
        <div>
            <h3>henlo</h3>
            <Logout/>
        </div>
    )
}
export default CustomerHome;