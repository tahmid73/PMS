import React,{useState,useEffect} from 'react'
import axiosConfig from "./../AllUserComponents/axiosConfig"

const ManagerHome=()=>{
    // const [val,getVal]=useState([])
    // useEffect(()=>{
    //     axiosConfig.()
    // })
    // return(

    // )
    return(
        <div>
            <center>
            <fieldset style={{width:"50%"}}>
                <center>
                    <button onClick={(e=>{window.location.href="/manager/user";})}>View User</button>
                    <button onClick={(e=>{window.location.href="/manager/medicine";})}>View Medicine</button>
                    <button onClick={(e=>{window.location.href="/manager/orders";})}>View Orders</button>
                    <button onClick={(e=>{window.location.href="/manager/supply";})}>View Supply</button>
                    <button onClick={(e=>{window.location.href="/manager/cart";})}>Go to Cart</button>
                </center>           
            </fieldset>
            </center>
        </div>
    )
}
export default ManagerHome