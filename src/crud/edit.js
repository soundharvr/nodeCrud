import axios from "axios";
import { useEffect, useState } from "react"
import { API } from "./api";

export default function Edit()
{
    const [id,setid]=useState(0);
    const [name,setname]=useState('');
    const [age,setage]=useState('');
    const [clg,setclg]=useState('')
    const h=(e)=>{
        e.preventDefault();
        axios.put(`${API}/${id}`,{uname:name,uclg:clg,uage:age});
        setname('');
        setclg('');
        setage('')
    }

    useEffect(()=>{
        setid(localStorage.getItem('id'));
        setname(localStorage.getItem('uname'));
        setage(localStorage.getItem('uage'));
        setclg(localStorage.getItem('uclg'));
    },[])
    return(
        <>

        <h1>Update details</h1>

        <form onSubmit={h} >
                <input type="text" value={name} placeholder="USER NAME" onChange={(event)=>setname(event.target.value)}/>
                <input type="text" value={clg} placeholder="COLLEGE NAME" onChange={(event)=>setclg(event.target.value)}/>
                <input type="text" value={age} placeholder="ENTER AGE" onChange={(event)=>setage(event.target.value)}/>
                <br/>
                <button>SAVE</button>
        </form>
        </>
    )
}