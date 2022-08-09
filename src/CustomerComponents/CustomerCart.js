import { useEffect, useState } from "react";
import axiosConfig from "./../AllUserComponents/axiosConfig"
import CustomerTopBar from "./CustomerTopBar";

const CustomerCart=()=>{
    const [cart,setCart]=useState([]);
    const [med_id,setMed_id]=useState();
    const [item_id,setItem_id]=useState();
    const [errs,setErrs] = useState({});

    useEffect(()=>{
    axiosConfig.get("customer/cart").then
    ((rsp)=>{
        setCart(rsp.data);
        debugger;
    },(err)=>{
        console.log("empty Cart");
        setErrs(err.response.data);
        debugger;
    });
    },[])

    const deleteItem=(event)=>{
        event.preventDefault();
        const data={med_id:med_id,item_id:item_id};
        debugger;
        axiosConfig.post("customer/deleteItem",data).then(
            (succ)=>{
                debugger;
                window.location.href="/customer/cart";

            },(err)=>{
                debugger;

            }

        )
    }
    return(
        <div>
            <h3><CustomerTopBar/></h3>
            <span><br/><br/>{
            errs.msg
            ?   <h3>{errs.msg}</h3>
            :   <table border="1">
                    <tr>
                        <th>Medicine Name</th>
                        <th>Price per Unit</th>
                        <th>Purchased Quantity</th>
                        <th>Total</th>
                    </tr>
                    {
                        cart.map((item)=>
                        <tr key={item.item_id}>
                        <td>{ item.med_name }</td>
                        <td>{ item.price_perUnit }</td>
                        <td>{ item.quantity }</td>
                        <td> { item.total } </td>
                        <td>
                            {
                                <form onSubmit={deleteItem}>
                                    <input type="submit" onClick={(e)=>{setMed_id(item.med_id);setItem_id(item.item_id)}} name="delete" value="DELETE"/>
                                </form>
                            }
                        </td>
                        </tr>
                        )
                    }

                        
                </table>
                }
            </span><br/>
        </div>
    )
}

export default CustomerCart