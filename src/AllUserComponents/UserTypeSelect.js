import axios from "axios";
import { useState } from "react";
const UserTypeSelect=()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleLogin=(event)=>{
        event.preventDefault();
        const data={email:email,password:password};
    }
    return(
        <fieldset>
        <button type=""></button>                
        </fieldset>
    )
}

export default UserTypeSelect;