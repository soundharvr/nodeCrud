import {useEffect, useState} from "react";
import axios from "axios"
import { API } from "./api";
import { useNavigate } from "react-router-dom";
export default function Create()
{
    const nav=useNavigate();

    const a=()=>{
        nav('/')
    }
    const [name,setname]=useState('')
    const [clg,setclg]=useState('')
    const [age,setage]=useState('')

    const h=(e)=>{
        e.preventDefault();
        // console.log("CLICKED");
        axios.post('localhost:400/',{name:name,clg:clg,age:age})
        setname('')
        setclg('')
        setage('')

    // }
    // const i=(e)=>{
    //     e.preventDefault();
    //     // console.log("CLICKED");
    //     axios.post('https://648404b0ee799e3216263829.mockapi.io/myFirstProject',{uclg:clg})
    //     setclg('')

    }
    const [view,setview]=useState([]);

    useEffect(()=>{
        axios.get('https://647d9193af9847108549e1df.mockapi.io/soundhar').then((s)=>{
            // console.log(s.data);
            setview(s.data)
        })
    },[])

    const del=(love)=>{
        axios.delete(`${API}/${love}`).then(()=>{
            axios.get('https://647d9193af9847108549e1df.mockapi.io/soundhar').then((z)=>{
                setview(z.data)
            })

        })
    }
    const ed=(a,b,c,d)=>{
        localStorage.setItem('id',a);
        localStorage.setItem('uname',b);
        localStorage.setItem('uclg',c);
        localStorage.setItem('uage',d);
        nav('/edit')
    }
    return(
        <>
        <button onClick={a}>BACK TO HOME</button>
            <h1>Hello</h1>
            <form onSubmit={h} >
                <input type="text" value={name} placeholder="USER NAME" onChange={(event)=>setname(event.target.value)}/>
                <input type="text" value={clg} placeholder="COLLEGE NAME" onChange={(event)=>setclg(event.target.value)}/>
                <input type="text" value={age} placeholder="ENTER AGE" onChange={(event)=>setage(event.target.value)}/>
                <br/>
                <button>SAVE</button>

                {/* <button>SUBMIT</button> */}
            </form>
            <table>
            <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>College</th>
                    <th>Age</th>
                    <th>Action</th>
                    <th>Changes</th>
                </tr>
            

             {view.map((v)=>
                        
                <tr>
                    <td>{v.id}</td>
                    <td>{v.uname}</td>
                    <td>{v.uclg}</td>
                    <td>{v.uage}</td>
                    <td>
                        <button onClick={()=>del(v.id)}>Delete</button>
                      
                    </td>
                    <td> <button onClick={()=>ed(v.id,v.uname,v.uclg,v.uage)}>Edit</button></td>
                </tr> 
              
           
            )}</table> 
        </>
    )
            }