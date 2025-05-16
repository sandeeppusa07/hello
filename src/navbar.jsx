import { Link } from "react-router-dom"

import './app.css'
export function Navbar()
{
    return(
        <>
        <div className="link">
          <ul>
           <Link to='/a'> <li> first</li></Link> 
           <Link to ='/b'><li>second</li></Link>
           <Link to='/c'><li>3rd</li></Link>
          </ul>
        </div>
       
        </>
    )
}
