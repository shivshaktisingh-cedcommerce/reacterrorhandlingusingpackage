import React from 'react'
import "./App.css"

export default function Component1({generate_fun , randomnum}) {
    if(randomnum<5 && randomnum!==null) {
        throw new Error("Number is less than 5")
       }
   
   
  return (
    <div id="component1_main_div_id">
        <div id="result">
           <p><button onClick={generate_fun}>Click</button></p>
           {randomnum===null?'':<p id="generatednumber_p_id">{"Generated Random Number is : " +randomnum}</p>}
        
       </div>
    </div>
  )
}