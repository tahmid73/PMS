import React,{useState,useEffect} from 'react'
import axiosConfig from "./../AllUserComponents/axiosConfig"

const ShowSupply=()=>{
    const [val,getVal]=useState([])

    useEffect(()=>{
        axiosConfig.get("manager/supply")
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
            <h3>Supply List</h3>
            <table border="1">
                <tr>
                    <th>Vendor Id</th>
                    <th>Medicine Id</th>
                    <th>Medicine Name</th>
                    <th>Stock</th>
                    <th>Price per Unit</th>
                </tr>
                    {
                        val.map((v) =>
                            <tr key={v.supply_id}>
                                <td>{v.vendor_id}</td>
                                <td>{v.med_id}</td>
                                <td>{v.med_name}</td>
                                {
                                    v.stock==0 &&
                                    <td>Out of Stock</td>
                                }
                                {
                                    v.stock!=0 &&
                                    <td>{v.stock}</td>
                                }
                                <td>{v.price_perUnit}</td>
                            </tr>
                        )
                    }
            </table>
        </div>
    )
}
export default ShowSupply;