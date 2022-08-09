import React,{useState,useEffect} from 'react'
import axiosConfig from "./../AllUserComponents/axiosConfig"

const ShowMed=()=>{
    const [val,getVal]=useState([])

    useEffect(()=>{
        axiosConfig.get("manager/medicine")
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
            <h3>Medicine List</h3>
            <table border="1">
                <tr>
                    <th>Medicine Id</th>
                    <th>Medicine Name</th>
                    <th>Price per Unit</th>
                    <th>Stock</th>
                    <th>Expiry Date</th>
                </tr>
                    {
                        val.map((v) =>
                            <tr key={v.med_id}>
                                <td>{v.med_id}</td>
                                <td>{v.med_name}</td>
                                <td>{v.price_perUnit}</td>
                                    {
                                        v.Stock==0 &&
                                        <td>Out of Stock</td>
                                    }
                                    {
                                        v.Stock!=0 &&
                                        <td>{v.stock}</td>
                                    }
                                <td>{v.expiryDate}</td>
                            </tr>
                        )
                    }
            </table>
        </div>
    )
}
export default ShowMed;