import React from 'react'
import { useState } from 'react';
import './Digital.css'

const Digital = () => {
    const currTime = new Date().toLocaleTimeString();

    const [time, setTime] = useState(currTime);

    // functon to update time
    const updateClock = () => {
        let time = new Date().toLocaleTimeString();
        setTime(time);
    }

    //Run function every second
    setInterval(updateClock, 1000);

  return (
    <div className='d-wrapper'>
        <h1>{time}</h1>
    </div>
  )
}

export default Digital
