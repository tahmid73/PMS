import React,{useState,useEffect} from 'react'
import axiosConfig from "./../AllUserComponents/axiosConfig"

const SearchBar=()=>{
    const [val,setVal]=useState('')
    const [table,setTable]=useState('')

    // useEffect(()=>{
    //     axiosConfig.get("manager/search")
    //     .then((res) =>{
    //         debugger
    //         getVal(res.data)
    //     },
    //     (err) =>{
    //         debugger
    //         console.log(err)
    //     })

    // },[])
    const search=(event)=>{
        event.preventDefault();
        const data={id:val,tab:table}
        {
            table=="user" &&
            axiosConfig.post("manager/search/user",data)
            .then((res)=>{
                debugger
            },
            (err)=>{
                debugger
                console.log(err)
            })
        }
        
    }
    return(
        <div>
            <form onSubmit={search}>
                <fieldset style={{width:"20%", position: 'absolute', right: 5, top: 5,}}>
                    <legend>Search Bar</legend>
                        Search in table: <br/>
                        <select name="search" placeholder="Search in table">
                            <option onClick={(e)=>{setTable("user")}} value="user">User</option>
                            <option onClick={(e)=>{setTable("medicine")}} value="medicine">Medicine</option>
                            <option onClick={(e)=>{setTable("contract")}} value="contract">Contract</option>
                            <option onClick={(e)=>{setTable("order")}} value="order">Order</option>
                            <option onClick={(e)=>{setTable("supply")}} value="supply">Supply</option>
                        </select>
                        <br/>
                        Search Here:- <br/>
                        <input type="text" name="searchBar" onChange={(e)=>{setVal(e.target.value)}} placeholder="Search by id"/> <br/>
                        <input type="submit" name="action" value="Search"/>
                </fieldset>
            </form>
        </div>
    )
}
export default SearchBar;