import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data,setData]=useState(0)
function inc () {
  setData(data +1);

}
useEffect (()=>{
  alert("click")
})


  return (
   <>
   
   <h1>{data}</h1>
   <button onClick={inc}>increament</button>
   </>
  );
}
