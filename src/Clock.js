import React, { useEffect, useState } from "react";

function Clock(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    
    useEffect(()=>{
     const interval= setInterval(()=>{
        const updatedTime=new Date().toLocaleTimeString();
        setTime(updatedTime);
      },1000);
        return ()=>{
          clearInterval(interval);
        }
      },[]);

    return (
      <div className='App'>
        {time}
      </div>
    );
  }

export default Clock;