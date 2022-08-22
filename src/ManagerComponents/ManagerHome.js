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
                    <button onClick={(e=>{window.location.href="/manager/user";})}>View User</button>
                    <button onClick={(e=>{window.location.href="/manager/medicine/all";})}>View Medicine</button>
                    <button onClick={(e=>{window.location.href="/manager/orders";})}>View Orders</button>
                    <button onClick={(e=>{window.location.href="/manager/contract";})}>View Contract</button>
                    <button onClick={(e=>{window.location.href="/manager/supply";})}>View Supply</button>
                    <button onClick={(e=>{window.location.href="/manager/query";})}>View Query</button>
                    <button onClick={(e=>{window.location.href="/manager/account";})}>View Account</button>
                    <button onClick={(e=>{window.location.href="/manager/cart";})}>Go to Cart</button>
                </center>           
            </fieldset>
            <SearchBar/>
            </center>
        </div>
    )
}
export default ManagerHome