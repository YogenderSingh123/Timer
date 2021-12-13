import React, { useEffect, useState } from "react";
import moment from 'moment';
function Clock(){
    const [time, settime] = useState(moment().format("YYYY-MM-DD h:ss"));
    useEffect(()=>{
      setInterval(()=>{
        let updatedTime=moment().format("YYYY-MM-DD h:ss");
        settime(updatedTime);
      },1000);
    },[]);
    return (
      <div className='App'>
        {time}
      </div>
    );
  }
export default Clock;