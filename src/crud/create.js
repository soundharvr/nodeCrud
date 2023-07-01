import { useState } from "react";

export default function Create()
{
    const [name,setname]=useState('')
    const a=(event)=>{
        event.preventDefault();
        // console.log("clicked");
        // setname('kalai')
    }
    const w=(a)=>{
        setname(a.target.value)
        console.log(a.target.value);
    }
    return(
        <>
        <h2>CRUD</h2>

        <form onSubmit={a}>
            <input type="text" value={name} onChange={w}/>
            <button>Submit</button>
        </form>
        
        </>
    )
}