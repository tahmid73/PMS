import React,{useState,useEffect} from 'react'
import axiosConfig from "./../AllUserComponents/axiosConfig"

function ShowUser(){
    const [val,getVal]=useState([])

    useEffect(()=>{
        axiosConfig.get("manager/user")
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
            <h3>User List</h3>
            <table border="1">
                <tr>
                    <th>User Id</th>
                    <th>User Name</th>
                    <th>User Type</th>
                </tr>
                    {
                        val.map((v) =>
                            <tr key={v.u_id}>
                                <td>{v.u_id}</td>
                                <td>{v.u_name}</td>
                                <td>{v.u_type}</td>
                            </tr>
                        )
                    }
            </table>
        </div>
    )
}
export default ShowUser;