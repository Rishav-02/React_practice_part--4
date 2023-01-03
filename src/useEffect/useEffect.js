import React, { useEffect , useState} from "react";

function Hook() {
    const [count,setCount] = useState(0);
    //useEffect runs on every render
    useEffect(() => {
    console.log("useEffect")
  });
  return (
    <div>
      <h4>useEffect in React {count}</h4>
      <button onClick={()=>setCount(count+1)}>Update Counter</button>
    </div>
  );
}

export default Hook;
