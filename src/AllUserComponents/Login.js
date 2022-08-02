import axios from "axios";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Navigate } from "react-router-dom";
function Login(){
    //const history = useHistory();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errs,setErrs] = useState("");
    const [user,setUser] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [homeUrl,setHomeUrl] = useState("");
    const handleLogin=(event)=>{
        event.preventDefault();
        const data={u_email:email,u_pass:password};
        // debugger;
        axios.post("http://localhost:8000/api/login",data).
        then((succ)=>{
            var token=succ.data.token;
            localStorage.setItem("token",token);
            // debugger;
            axios.get(`http://localhost:8000/api/user/get/${email}`,data)
            .then((rsp)=>{
                debugger;
                if(rsp.data.u_type==="COURIER"){
                    setHomeUrl("/courier/home")
                }
                else if (rsp.data.u_type=="CUSTOMER"){
                    window.location.href="/customer/home";
                }
            },(error)=>{
                debugger;
                setErrs(error.response.data);
            }
            )
        },(err)=>{
            console.log("error");
            debugger;
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