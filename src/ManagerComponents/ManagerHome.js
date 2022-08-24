import React,{useState,useEffect} from 'react'
import axiosConfig from "./../AllUserComponents/axiosConfig"
import SearchBar from "./../ManagerComponents/SearchBar"


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
                    <button onClick={(e=>{window.location.href="/manager/user/all";})}>View User</button>
                    <button onClick={(e=>{window.location.href="/manager/medicine/all";})}>View Medicine</button>
                    <button onClick={(e=>{window.location.href="/manager/orders/all";})}>View Orders</button>
                    <button onClick={(e=>{window.location.href="/manager/contract/all";})}>View Contract</button>
                    <button onClick={(e=>{window.location.href="/manager/supply/all";})}>View Supply</button>
                    <button onClick={(e=>{window.location.href="/manager/query";})}>View Query</button>
                    <button onClick={(e=>{window.location.href="/manager/account";})}>View Account</button>
                    <button onClick={(e=>{window.location.href="/manager/cart";})}>Go to Cart</button>
                </center>           
            </fieldset>
            <SearchBar/>
            </center>
            <button onClick={(e=>{window.location.href="/manager/change";})}>Change Password</button>
        </div>
    )
}
export default ManagerHome