import React from "react";

import Food from "./food";

function Reuse() {
    const food=[
        {
            itemname:"Cake",type:"desert",price:"300"
        },
        {
            itemname:"Apple",type:"fruit",price:"100"
        },
        {
            itemname:"Egg",type:"non-veg",price:"80"
        },
        {
            itemname:"Almond",type:"nuts",price:"800"
        }
    ]

    return(
        <div>
            <h3>Reuse Component with List</h3>
            {
            food.map((item,i)=>                
               <Food data={item} />//props passed here, item passed to data
                )
            }
        </div>
    )
}

export default Reuse;