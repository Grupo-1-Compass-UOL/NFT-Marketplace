import React, { useState, useEffect } from 'react';
import classes from './timer.module.css';

const Timer = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 }); 
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    let interval = null;

    if (startTimer) {
      interval = setInterval(() => {
        setTime(prevTime => {
          const newSeconds = prevTime.seconds + 1;
          const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
          const newHours = prevTime.hours + Math.floor(newMinutes / 60);

          return {
            hours: newHours,
            minutes: newMinutes % 60,
            seconds: newSeconds % 60
          };
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [startTimer]);

  const handleStartTimer = () => {
    setStartTimer(true);
  };

  const handleStopTimer = () => {
    setStartTimer(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  return (
    <div className={classes.container}>
      <p className={classes.auction}>Auction ends in:</p>
      <div className={classes.timer}>
          <h3 className={classes.digit}> {time.hours.toString().padStart(2, '0')}: </h3>
          <h3 className={classes.digit}>{time.minutes.toString().padStart(2, '0')}: </h3>
          <h3 className={classes.digit}> {time.seconds.toString().padStart(2, '0')}  </h3>
          </div>
    
          {!startTimer && <button onClick={handleStartTimer} className={classes.btn_timer}>Place Bid</button>}
      {startTimer && <button onClick={handleStopTimer} className={classes.btn_timer}>Stop</button>}
      
    </div>
  );
};

export default Timer;
