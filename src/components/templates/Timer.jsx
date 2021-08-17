import React, {useState, useContext} from 'react'
import './Timer.css'
import TimerSvg from './svgs/TimerSvg'
import { TimerContext } from '../../contexts/TimerContext';

function Timer(props) {
    const [timer, setTimer] = useState('stable')
    return (
        <TimerContext.Provider value={{timer, setTimer}}>
            <div className="timer">
                <TimerSvg {...props}/>
                <button onClick={() => {setTimer(timer === 'stable' ? 'animated' : 'stable')}}>Clique</button>
            </div>    
        </TimerContext.Provider>
    );
}

export default Timer;