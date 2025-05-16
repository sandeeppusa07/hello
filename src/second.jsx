import { Link } from "react-router-dom"
import './app.css'
function Second()
{
    return(
        <>
         <Link to='/e' className="kl" >six</Link>
        <h1 style={{color:"red"}}>this is second component</h1>
        </>
    )
}


export function Six()
{
    return(
        <>
      <h1>this six</h1>
      <h1>hello all</h1>
        </>
    )
}
export default Second