import axios from "axios";
import { useEffect } from "react";

const CustomerHome=()=>{
    useEffect(()=>{
        axios.defaults.headers.common["Authorization"]=localStorage.getItem("token");
        axios.get("http://localhost:8000/api/customer/home").
        then((rsp)=>{
            console.log("true");
            debugger;
        },(err)=>{
            console.log("false");
            debugger;
        })
    })
    return(
        <div>
            <h3>henlo</h3>
        </div>
    )
}
export default CustomerHome;