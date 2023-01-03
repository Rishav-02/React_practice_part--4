import React,{ useEffect } from "react";

function Props(props) {
    //props.count is a condition to run useEffect hook
    useEffect(()=> {
        console.log("count is " +props.count);
    },[props.count])//[props.count,props.data] pe runs on both count and data
    
    return(
        <div>
        <p>Count Props: {props.count}</p>
        <p>Data Props: {props.data}</p>

        </div>
    );
}

export default Props;