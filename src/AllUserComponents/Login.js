import axios from "axios";
import { useState, useSyncExternalStore } from "react";
import { Navigate } from "react-router-dom";
function Login(){
    //const history = useHistory();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    // const [url,setUrl] = useState("");
    const [errs,setErrs] = useState("");
    const [user,setUser] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [homeUrl,setHomeUrl] = useState("");
    const handleLogin=(event)=>{
        event.preventDefault();
        const data={u_email:email,u_pass:password};
        axios.get(`http://localhost:8000/api/user/get/${email}`,data)
        .then((rsp)=>{
            debugger;
            if(rsp.data.u_pass===password){
                console.log("logged");
                setIsSubmitted(true);
                if(rsp.data.u_type==="COURIER"){
                    setHomeUrl("/courier/home")
                }
            }
            else{
                console.log("wrong password");
                setErrs(rsp.data);
                debugger;
            }
        }
        ,(err)=>{
            debugger;
            setErrs(err.response.data);
        }
        )
    }

    const loginForm = (
        <div>
        <form onSubmit={handleLogin}>
            Email: <input onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" value={email}/> <br/><br/>
            <span>{errs.email? errs.email[0]:''}</span>
            Password: <input onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" value={password}/> <br/><br/>
            <span>{errs? errs.password[0]:''}</span>
            <input type="submit" value="Login"/>
        </form>
        
        </div>  
    )
    return(
        <div>
        <fieldset>
        {isSubmitted ? <Navigate to={homeUrl}/> : loginForm}            
        </fieldset>
        </div>
    )
}

export default Login;