import axios from "axios";
import { useState } from "react";

export default function Sent()
{
    const [name,setname]=useState('')
    const h=(e)=>{
        e.preventDefault();
        console.log('hai');
        axios.post('https://647d9193af9847108549e1df.mockapi.io/soundhar',{uname:name})
    }
    const k=(e)=>{
        console.log(e.target.value);
        setname(e.target.value)
    }
    return(
        <>

        <form onSubmit={h}>
            <input type="text" value={name} onChange={k} />
            <input type="submit"/>
        </form>
        
        </>
    )
}