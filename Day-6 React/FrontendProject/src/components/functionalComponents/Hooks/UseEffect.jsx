import { useEffect } from "react";
import { useState } from "react";
const UseEffect=()=>{
    var [text,updateText]=useState("");
    useEffect (()=>{console.log(text)},[text])
    var [number,updateNumber]=useState(0);
    useEffect (()=>{console.log(number)},[number])
    return (
    <div>
     <h1> Use Effect hooks</h1>
     <input type="text" value={text} onChange={(e) =>{updateText(e.target.value)}}/>
     <h3> Use Effect hook-number</h3>
     <input type="number" value={number} onChange={(e) =>{updateNumber(e.target.value)}}/>
     </div>
    )
}
export default UseEffect;