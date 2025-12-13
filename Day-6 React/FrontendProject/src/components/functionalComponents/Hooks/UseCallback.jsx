import { useEffect, useState ,useCallback} from "react";
const UseCallback = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);

  const styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  var numList=useCallback((mul)=>{
    return [number+mul*2,number+mul*3,number+mul*4]
  },[number]);
   

  return (
    <div style={styling}>
      <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
      <p>UseCallBack Hook</p>
       <button onMouseOver={()=>setNumber(number-1)}>-</button>
      <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
       <button onMouseLeave={()=>setNumber(number+1)}>+</button>
        
       <p>the Number is {number}</p>
       {numList(10).map((num, ind)=>{
        return <h6 key={ind}>The mutlipied number according to your multiplication is {num}</h6>
       })}
    
      
    </div>
  );
};
export default UseCallback;
