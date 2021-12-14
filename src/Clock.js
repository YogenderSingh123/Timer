import React, { useEffect, useState } from "react";

function Clock(){
    const [time, setTime] = useState(new Date().toLocaleDateTimeString());
    
    useEffect(()=>{
     const Interval= setInterval(()=>{
        const updatedTime=new Date().toLocaleTimeString();
        setTime(updatedTime);
      },1000);
        return ()=>{
          clearInterval(Interval);
        }
      },[]);

    return (
      <div className='App'>
        {time}
      </div>
    );
  }

export default Clock;