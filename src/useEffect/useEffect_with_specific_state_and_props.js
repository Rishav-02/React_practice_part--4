import React,{ useEffect, useState } from "react";

function Specific() {
    const[data,setData]=useState(10);
    const[count,setCount]=useState(100);
    
    useEffect(()=> {
         console.warn("use effect called for count");
    },[count])//parameter count is passed then called on count

    useEffect(()=> {
         console.warn("use effect called for data");
    },[data])//parameter data is passed then called on data
    
    return(
        <div>
        <p>Count: {count}</p>
        <p>Data: {data}</p>

            <button onClick={()=>setCount(count+1)}>Increase count</button>
            <button onClick={()=>setData(data+1)}>Increase data</button>
        </div>
    );
}

export default Specific;