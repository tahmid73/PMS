import axios from "axios";
import { useState } from "react";
const ForgetPassword=()=>{
    const [email,setEmail] = useState("");
    const handleLogin=(event)=>{
        event.preventDefault();
        const data={email:email};
    }
    return(
        <fieldset>
        <form onSubmit={handleLogin}>
            Email: <input onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" value={email}/> <br/><br/>
            <input type="submit" value="Login"/>
        </form>                 
        </fieldset>
    )
}

export default ForgetPassword;