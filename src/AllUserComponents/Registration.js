import axios from "axios";
import { useState } from "react";

const Registration=()=>{

    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmPassword] = useState("");
    const [email,setEmail] = useState("");
    const [type,setType] = useState("");
    const [errs,setErrs] = useState({});
    const [succ,setSucc] = useState({});
    const handleRegistration=(event)=>{
        // debugger;
        event.preventDefault();
        const data={name:name,email:email,password:password,type:type};
        axios.post("http://localhost:8000/api/user/create",data).
        then((succ)=>{
            setSucc(succ.data);
            // debugger;
            window.location.href="/";
        },(err)=>{
            setErrs(err.response.data);
            console.log(data);
            // debugger;
        }

        )
    }
    return(
        <fieldset> 
            <button onClick={()=>{setType("CUSTOMER")}} value={"CUSTOMER"}>Customer</button>
            <button onClick={()=>{setType("VENDOR")}} value={"VENDOR"}>Vendor</button>
            <button onClick={()=>{setType("MANAGER")}} value={"MANAGER"}>Manager</button>
            <button onClick={()=>{setType("COURIER")}} value={"COURIER"}>Courier</button>   
        <form onSubmit={handleRegistration}>     
            <br/>     
            Name: <input onChange={(e)=>{setName(e.target.value)}} type="text" name="name" value={name}/> <br/>
            <span>{errs.name? errs.name[0]:''}</span><br/>
            Email: <input onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" value={email}/> <br/>
            <span>{errs.email? errs.email[0]:''}</span><br/>
            Password: <input onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" value={password}/> <br/>
            <span>{errs.password? errs.password[0]:''}</span><br/>
            Confirm Password: <input onChange={(e)=>{setConfirmPassword(e.target.value)}} type="password" name="confirmpassword" value={confirmpassword}/> <br/>
            <span>{errs.confirmpassword? errs.confirmpassword[0]:''}</span><br/>
            <input type="submit" value="Register"/>
        </form>
        {succ.msg}
        </fieldset>

    )
}

export default Registration;    