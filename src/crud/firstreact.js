import { useNavigate } from "react-router-dom"

export default function Firstreact()
{
    const na=useNavigate('')
    const h=()=>{
        na('/create')
    }
    return(
        <>
            <h1>Welcome</h1>

            <button onClick={h}>CREATE</button>
        </>
    )
}