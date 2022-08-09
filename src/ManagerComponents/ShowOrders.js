import React,{useState,useEffect} from 'react'
import axiosConfig from "./../AllUserComponents/axiosConfig"

const ShowOrders=()=>{
    const [val,getVal]=useState([])

    useEffect(()=>{
        axiosConfig.get("manager/orders")
        .then((res) =>{
            debugger
            getVal(res.data)
        },
        (err) =>{
            debugger
            console.log(err)
        })

    },[])
    return(
        <div>
            <h3>Order List</h3>
            <table border="1">
                <tr>
                    <th>Order Id</th>
                    <th>Customer Id</th>
                    <th>Total Price</th>
                    <th>Order Status</th>
                </tr>
                    {
                        val.map((v) =>
                            <tr key={v.order_id}>
                                <td>{v.order_id}</td>
                                <td>{v.customer_id}</td>
                                <td>{v.totalbill}</td>
                                <td>{v.order_status}</td>
                            </tr>
                        )
                    }
            </table>
        </div>
    )
}
export default ShowOrders;