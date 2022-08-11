import React,{useState,useEffect} from 'react'
import axiosConfig from "./../AllUserComponents/axiosConfig"
import ManagerHome from "./../ManagerComponents/ManagerHome"

function ViewCart(){
    const [val,getVal]=useState([])

    useEffect(()=>{
        axiosConfig.get("manager/cart/table")
        .then((res) =>{
            debugger
            getVal(res.data)
        },
        (err) =>{
            debugger
            console.log(err)
        })

    },[])

    const placeOrder=(event)=>{
        debugger
        event.preventdefault();
        axiosConfig.post("manager/confirm")
        .then((suc)=>{
            debugger
            window.location.href="/manager/home"
        },
        (er)=>{
            debugger
            console.log(er)
        })
    }
    return(
        <div>
            <ManagerHome/>
            <h3>Cart List</h3>
            <table border="1">
                <tbody>
                <tr>
                    <th>Vendor Id</th>
                    <th>Medicine Id</th>
                    <th>Medicine Name</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                </tr>
                    {
                        val.map((v) =>
                            <tr key={v.med_id}>
                                <td>{v.vendor_id}</td>
                                <td>{v.med_id}</td>
                                <td>{v.med_name}</td>
                                <td>{v.price_perUnit}</td>
                                <td>{v.quantity}</td>
                                <td>{v.total_price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {
                <form onSubmit={placeOrder}>
                <br/><br/>
                <input type="submit" name="confirm" value="Confirm Order"/> 
                </form>
            }
        </div>
    )
}
export default ViewCart;