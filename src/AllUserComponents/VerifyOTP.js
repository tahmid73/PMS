import { useState } from "react";
import axiosConfig from "./axiosConfig";
import { useParams } from "react-router-dom";
const VerifyOTP=()=>{
    const {email} = useParams();
    const [otp,setOtp] = useState();
    const [errs,setErrs] = useState("");

    const verify=(event)=>
    {
        event.preventDefault();
        const data = {email:email,code:otp};
        debugger;
        axiosConfig.post("otp/verify",data).then
        ((rsp)=>{
            debugger;
            window.location.href=`/set/password/${email}`
        },(err)=>{
            debugger;
            setErrs(err.response.data);
        })
    }
    return(
        <div>
            <center>
            <br/><br/><br/><br/>
            <fieldset style={{width:"30%"}}>
            <form onSubmit={verify}>
                <br/>
                Email: <input type="email" size={30} name="email" value={email} readOnly/> <br/><br/>
                CODE : <input type="num" name="code" onChange={(e)=>{setOtp(e.target.value)}} maxLength={6} size="35" placeholder=" Enter the 6 digit code sent to your email " value={otp}/> <br/> <br/>

                <input type="submit" value="VERIFY OTP"/>
            </form>                 
            </fieldset>
            {errs.msg}
            </center>
        </div>
    )
}

export default VerifyOTP;