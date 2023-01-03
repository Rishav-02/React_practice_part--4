import React,{ useState } from "react";
import Props from "./props";

function Update() {
    const[data,setData]=useState(1);
    const[count,setCount]=useState(50);
    
    return(
        <div>

        <Props count={count} data={data}/>

            <button onClick={()=>setCount(count+1)}>Increase count props</button>
            <button onClick={()=>setData(data+1)}>Increase data props</button>
        </div>
    );
}

export default Update;