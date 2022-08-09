import {useState,useEffect} from 'react';
import axiosConfig from './../AllUserComponents/axiosConfig';
import {Link} from 'react-router-dom';
const ShowMedicine=()=>{
    const[med,setMed] = useState([]);
    const[med_id,setMed_id]=useState();
    const[quantity,setQuantity] = useState([]);
    const [errs,setErrs] = useState({});
    const [succ,setSucc] = useState({});
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


    const handleQuantity=(event)=>{
        // debugger;
        event.preventDefault();
        const data={med_id:med_id,quantity:parseInt(quantity)};
        debugger;
        axiosConfig.post("customer/add/cart",data).
        then((succ)=>{
            setSucc(succ.data);
            debugger;
            window.location.href="/customer/medlist";
        },(err)=>{
            setErrs(err.response.data);
            console.log(data);
            debugger;
        }

        )
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
                    {/* {setMed_id(m.med_id)} */}
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
                            <form onSubmit={handleQuantity}>
                                <input type="number" name="quantity" min={0} onChange={(e)=>{setQuantity(e.target.value);setMed_id(m.med_id)}} placeholder="Type quantity here" value={quantity[m.med_id]}/>
                                <input type="submit" name="cart" value="ADD TO CART"/> 
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