import React, {useState} from 'react';
import { useEffect } from 'react';
import './Analog.css';

const Analog = () => {

    const [time, setTime] = useState(new Date());
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);

        const currentDate = new Date;
        let secondRatio = currentDate.getSeconds() / 60;
        let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
        let hourRatio = (minuteRatio + currentDate.getHours()) / 12;
        setSecond(secondRatio) 
        setMinute(minuteRatio) 
        setHour(hourRatio);

        return () => {
            clearInterval(interval);
        }
        
    }, [time]);
    
    console.log(second, "second");


  return (
    <div className='clock-wrapper'>
        <div id="hourhand" className='hour'style={{transform: `translate(-50%) rotate(${hour * 360}deg)`}} ></div>
        <div id="minuteHand" className='minute' style={{transform: `translate(-50%) rotate(${minute * 360}deg)`}}></div>
        <div id="secondHand" className='second' style={{transform: `translate(-50%) rotate(${second * 360}deg)`}}></div>

        <div className='num one'>
            <div>1</div>
        </div>
        <div className='num two'>
            <div>2</div>
        </div>
        <div className='num three'>
            <div>3</div>
        </div>
        <div className='num four'>
            <div>4</div>
        </div>
        <div className='num five'>
            <div>5</div>
        </div>
        <div className='num six'>
            <div>6</div>
        </div>
        <div className='num seven'>
            <div>7</div>
        </div>
        <div className='num eight'>
            <div>8</div>
        </div>
        <div className='num nine'>
            <div>9</div>
        </div>
        <div className='num ten'>
            <div>10</div>
        </div>
        <div className='num eleven'>
            <div>11</div>
        </div>
        <div className='num tweleve'>
            <div>12</div>
        </div>
    </div>
  )
}

export default Analog
