import axios from "axios";
import { useState, useSyncExternalStore } from "react";
import { Navigate } from 'react-router-dom';
const Login=()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [url,setUrl] = useState("");
    const [errs,setErrs] = useState({});
    const [user,setUser] = useState([]);
    const handleLogin=(event)=>{
        event.preventDefault();
        const data={u_email:email,u_pass:password};
        setUrl(`http://localhost:8000/api/user/get/${email}`);
        axios.get(url)
        .then((rsp)=>{
            debugger;
            // if(rsp.data.u_pass===password){
            //     <Navigate to="/home" />
            // }
            // else{
            //     console.log("wrong password")
            // }
        }
        ,(err)=>{
            debugger;
            setErrs(err.response.data);
        }
        )
    }
    return(
        <fieldset>
        <form onSubmit={handleLogin}>
            Email: <input onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" value={email}/> <br/><br/>
            <span>{errs.email? errs.email[0]:''}</span>
            Password: <input onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" value={password}/> <br/><br/>
            <span>{errs.password? errs.password[0]:''}</span>
            <input type="submit" value="Login"/>
        </form>                 
        </fieldset>
    )
}

export default Login;