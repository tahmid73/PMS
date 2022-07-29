import { useState } from "react";

const Registration=()=>{
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmPassword] = useState("");
    const [email,setEmail] = useState("");
    const [type,setType] = useState("CUSTOMER");
    const handleRegistration=(event)=>{
        event.preventDefault();
        const data={} 
    }
    return(
        <fieldset>
        <form onSubmit={handleRegistration}>
            Name: <input onChange={(e)=>{setName(e.target.value)}} type="text" name="name" value={name}/> <br/><br/>
            Email: <input onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" value={email}/> <br/><br/>
            Password: <input onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" value={password}/> <br/><br/>
            Confirm Password: <input onChange={(e)=>{setConfirmPassword(e.target.value)}} type="password" name="confirmpassword" value={confirmpassword}/> <br/><br/>
            <input type="submit" value="Register"/>
        </form>
        </fieldset>
    )
}

export default Registration;    