import {useState,useEffect} from 'react';
import axiosConfig from './../AllUserComponents/axiosConfig';
import {Link} from 'react-router-dom';
const ShowMedicine=()=>{
    const[med,setMed] = useState([]);
    const[quantity,setQuantity] = useState([]);
    useEffect(()=>{
        axiosConfig.get("customer/medlist").then((rsp)=>{
        setMed(rsp.data);
        debugger;
        },(er)=>{

        })

    },[quantity]);
    const loadData=()=>{
        axiosConfig.get("customer/medlist").then((rsp)=>{
        setMed(rsp.data);
        },(er)=>{

        })
    }
    return(
        <div>
            <button onClick={loadData}>Load Data</button>
            <table border="1">
                <tr>
                    <th>Medicine Name</th>
                    <th>Price per Unit</th>
                    <th>Stock</th>
                    <th>Quantity</th>
                </tr>
                {
                    med.map((m)=>
                    <tr key={m.med_id}>
                    <td>{ m.med_name }</td>
                    <td>{ m.price_perUnit }</td>
                    {
                        m.Stock=='0' &&
                        <td>STOCK OUT</td>
                    }
                    {
                        m.Stock!='0' &&
                        <td>{m.Stock}</td>
                    }
                    <td>
                        {
                            <form>
                                <input type="number" name="quantity" min={0} onChange={(e)=>{setQuantity(e.target.value)}} placeholder="Type quantity here" value={quantity[m.med_id]}/>
                            </form>
                        }
                    </td>
                    </tr>
                    )
                }

                    
            </table>
        </div>
    )
}
export default ShowMedicine;