import React, {useEffect, useState } from 'react'

import "./index.css";
export const AdviceApp = () => {
    const [advice,setAdvice]=useState("Please Click the Button to Get Advice");
    const [count,setCount]=useState(0);

    async function getAdvice(){
        const res=await fetch("https://api.adviceslip.com/advice");
        const data=await res.json();
        setAdvice(data.slip.advice);
        setCount((c)=>(c+1));
    }
    useEffect(function(){
        getAdvice();
    },[]);
  return (
    <div>
        <h2>Advice App</h2>
        <h3>{advice}</h3>
        <button onClick={getAdvice}>Get Advice</button>
        <Counter count={count}/>
    </div>
  )
}
function Counter(props){
    return(
    <p>
        You have read <b>{props.count}</b> piece of Advice
    </p>
    )
}
