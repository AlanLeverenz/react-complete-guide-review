import { useState, useEffect } from 'react';

export default function ProgressBar(timer) {
  // add state for the Timer
  const [remainingTime, setRemainingTime] = useState(timer);
  // defines function that will be executed frequently
  // useEffect executes each time remaining time changes
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('INTERVAL');
      setRemainingTime(prevTime => prevTime - 10)
    }, 10);

    // cleanup function to end setInterval
    // when the Modal dismounts (onConfirm) the cleanup function 
    // ends the timer
    return () => {
      clearInterval(interval);
    }
  }, []);

  return <progress value={remainingTime} max={timer} />
}