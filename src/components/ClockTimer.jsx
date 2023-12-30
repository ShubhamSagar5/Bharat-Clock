import React from "react";
import { useState,useEffect } from 'react'

const ClockTimer = () => {
  

 const [time, setTime] = useState(new Date())

 useEffect(() => {
  const intervalId =  setInterval(()=>{
    setTime(new Date())
   },1000)
 
   return () => {
     clearInterval(intervalId)
   }
 }, [])
 

  return (
    <div>
      <p className='lead'>
        This is Current Time :- {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default ClockTimer;
