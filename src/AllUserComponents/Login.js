import axios from "axios";
import { useState } from "react";
const Login=()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleLogin=(event)=>{
        event.preventDefault();
        const data={email:email,password:password};
    }
    return(
        <fieldset>
        <form onSubmit={handleLogin}>
            Email: <input onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" value={email}/> <br/><br/>
            Password: <input onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" value={password}/> <br/><br/>
            <input type="submit" value="Login"/>
        </form>                 
        </fieldset>
    )
}

export default Login;