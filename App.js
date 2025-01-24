
import React from 'react';
import { Stopwatch } from './play.js';
import './play.css'

const App = () => {
  return(
    <div className='body'>
          <div className="app" id="stopwatch">
          <header className='header'>
      <h1 className='title'>HOW TO PLAY...</h1>
      <h2 className='h2'> HIT THE START BUTTON TO BEGIN THE TIMER. CAN YOU STOP IT ON 05:000 SECONDS? </h2>
    </header>
        <section className='section'><Stopwatch /></section>
      
      </div>
    </div>
    
);
}

export default App


