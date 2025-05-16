import { useState,useEffect } from "react"
import { Link } from "react-router-dom";

import './app.css'

// import { BrowserRouter,Route,Routes } from "react-router-dom";
export function Third()
    {

const link="https://jsonplaceholder.typicode.com/posts"
 
    const[user,setuser]=useState([])

const handler= async()=>{
    const response= await fetch(link);

    const newdata=await  response.json();
    setuser(newdata);
};   
useEffect(()=>{
   handler();
    
},[]);

    return(
        <>
          <h1>this is the third component</h1>
          <Link to="/d" className="kl">five</Link>
             {
                user.map((item)=>{
                    return(
                        <>
                        <ul key={item.id}>
                            <li>{item.id}</li>
                            <li>{item.title}</li>
                        </ul>

                        </>
                    )

                })
             }
         

        </>
    );
}

   export function Five()
{
     const link="https://jsonplaceholder.typicode.com/photos";

     const[photo,setphoto]=useState([]);

     const handling=async()=>{
        const data= await fetch(link);
        const newinfo=await data.json();
        setphoto(newinfo);
     }
     
     useEffect(()=>{
        handling();
     },[])

    return(
        <>
      <h1>this is ffivth component</h1>

      {
        photo.map((i)=>{
            return(
                <div key={i.id}>
                <p>{i.id}</p>
                <p>{i.title}</p>
                <img src={i.url} alt={`Image ${i.id}`} style={{ width: "150px", margin: "10px" }} />
              </div>
            )
        })
      }
       
        </>
    );
};

