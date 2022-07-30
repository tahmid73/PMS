import { useState } from "react";
const Home=()=>{
    const [email,setEmail] = useState("");
    const handleLogin=(event)=>{
        event.preventDefault();
        const data={email:email};
    }
    return(
        <fieldset>
            that the home             
        </fieldset>
    )
}

export default Home;