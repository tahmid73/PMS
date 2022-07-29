import { useState } from "react";

const Registration=()=>{
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmPassword] = useState("");
    const [email,setEmail] = useState("");
    const handleRegistration=()=>{
        
    }
    return(
        <fieldset>
        <form>
            Name: <input type="text" name="name" value=""/> <br/><br/>
            Email: <input type="email" name="email" value=""/> <br/><br/>
            Password: <input type="password" name="password" value=""/> <br/><br/>
            Confirm Password: <input type="password" name="confirmpassword" value=""/> <br/><br/>
            <input type="submit" value="Register"/>
        </form>
        </fieldset>
    )
}

export default Registration;