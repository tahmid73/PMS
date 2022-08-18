import axios from "axios";
import { useState } from "react";
import axiosConfig from "./axiosConfig";
const ForgetPassword=()=>{
    const [email,setEmail] = useState("");
    const [errs,setErrs] = useState("");
    const sendOTP=(event)=>{
        event.preventDefault();
        const data={u_email:email};
        axiosConfig.post("otp",data).then
        ((rsp)=>{
            debugger;
            window.location.href=`/send/otp/${email}`
        },(errs)=>{
            setErrs(errs.response.data);
            debugger;
        })
    }
    return(
        <center>
            <br/><br/><br/><br/>
        <fieldset style={{width:"30%"}}>
        <form onSubmit={sendOTP}>
            <br/>
            Email: <input onChange={(e)=>{setEmail(e.target.value)}} type="email" size={30} name="email" value={email}/> <br/><br/>
            <input type="submit" value="SEND OTP CODE"/>
        </form>                 
        </fieldset>
        </center>
    )
}

export default ForgetPassword;