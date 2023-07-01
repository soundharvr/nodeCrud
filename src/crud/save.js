import { useState } from "react";

export default function Save()
{
    const [name,setname]=useState('')
    const a=(event)=>{
        event.preventDefault();
        // console.log("clicked");
        // setname('kalai')
    }
    const j=(d)=>{
        setname(d.target.value)
        console.log(d.target.value);
    }
    return(
        <>
        <h2>CRUD CONTROLE</h2>

        <form onSubmit={a}>
            {<input type="text" value={name} onChange={j}/>}
            <button>START</button>
        </form>
        
        </>
    )
}