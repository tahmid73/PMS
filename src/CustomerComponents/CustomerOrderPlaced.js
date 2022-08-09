import Logout from "../AllUserComponents/Logout";
import CustomerTopBar from "./CustomerTopBar";

const CustomerOrderPlaced=()=>{
    return(
        <div>
            <h3><CustomerTopBar/></h3>
            <center>
                <br/>
            <fieldset style={{width:"50%"}}>
                <center>
                    <h3>YOUR ORDER HAS BEEN PLACED SUCCESSFULLY!</h3>
                </center>           
            </fieldset>
            <a href="/customer/home">RETURN HOME</a>
            </center>
            <br/>
            <Logout/>
        </div>
    )
}

export default CustomerOrderPlaced;