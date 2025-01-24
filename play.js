import React, { useState, useRef } from 'react';
import './play.css'

export const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);


  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 10);
    }, 10);
  };

  const handlePause = () => {
    if (!isRunning) return;
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTimer(0);
  };
  

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, '0');
    const milliseconds = (time % 1000).toString().padStart(3, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div>
      <h1 className="timecolour">{formatTime(timer)}</h1>
      <section>
        <button className='start' onClick={handleStart}>START</button>
      <button className='pause' onClick={handlePause}>STOP</button>
      <button className='reset' onClick={handleReset}>RESET</button>
      </section>
    </div>
  );
};