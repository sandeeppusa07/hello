import { useState,useEffect } from "react"
import { data } from "./userdata"
function First()
{
    const[user,setuser]=useState([])


   
  useEffect(() => {
    setuser(data); 
  }, []);

    return(
        <>
        <h1>this is first component</h1>

        {
            user.map((item)=>{
                return(
                  
                       <ul key={item.id}>
                        <li>{item.name}</li>
                        <li>{item.phone}</li>

                       </ul>
                 
                )
            })
        }

        {/* {user} */}
        </>
    )
}
export default First