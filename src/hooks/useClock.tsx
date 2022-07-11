import * as React from 'react';
import {useState}  from 'react';

const useClock = () => {
  // TODO
  // refer readme.md for what to return
  

  

  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  const lable = "24 Hour Live Custom Components Clock";
  const [time ,setTime] = useState(seconds);
  const update = ()=>{
     seconds = new Date().getSeconds();
     setTime(seconds)
  };

  setInterval(update,1000)

  return {hour,minutes,seconds,lable}
  

 
};

export default useClock;
