import React,{ useState } from "react";

export function Counterpage(){
  const [count,setcount]=useState(0)
  function handle(type=""){
      if(type === "increment"){
        setcount(count+1);
        console.log(count);
      }
      else{
        setcount(count-1);
      }
  }
    return (
        <div className="content">
          <h1>{count}</h1>
          <div className="btn">
            <button onClick={()=> handle("increment")}>+</button>
            <button onClick={()=>handle()}>-</button>
          </div>
        </div>
    );
}