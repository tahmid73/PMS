import CustomerTop from "./CustomerTop";

const CustomerTopBar=()=>{
    return(
        <div>
            <CustomerTop url="/customer/medlist" value="Medicine List || "/>
            <CustomerTop url="/customer/cart" value="Cart || "/>
        </div>
    )
}

export default CustomerTopBar;