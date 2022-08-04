import { useState } from "react";

const Registration=()=>{

    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmPassword] = useState("");
    const [email,setEmail] = useState("");
    const [type,setType] = useState("");
    const handleRegistration=(event)=>{
        event.preventDefault();
    }
    return(
        <fieldset> 
            <button onClick={()=>{setType("CUSTOMER")}} value={"CUSTOMER"} className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">Customer</button>
            <button onClick={()=>{setType("VENDOR")}} value={"VENDOR"} className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">Vendor</button>
            <button onClick={()=>{setType("MANAGER")}} value={"MANAGER"}>Manager</button>
            <button onClick={()=>{setType("COURIER")}} value={"COURIER"}>Courier</button>   
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