import React, {useState, useEffect} from 'react'
import './Timer.css'
import TimerSvg from './svgs/TimerSvg'
import { TimerContext } from '../../contexts/TimerContext';

function Timer(props) {


    const [animationState, setAnimationState] = useState('stable')
    const [timer, setTimer] = useState(props.timer)

    function toggleAnimation() {
        setAnimationState(animationState === 'stable' ? 'animated' : 'stable')
    }

    return (
        <TimerContext.Provider value={{animationState, setAnimationState}}>
            <div className="timer">
                <h1 className="temporizador">
                    {timer}
                </h1>
                <TimerSvg {...props} timer={props.timer}/>
                <button onClick={() => {toggleAnimation(); if(animationState === 'stable') {
                    setInterval(() => {setTimer(timer - 1)}, 1000)
                }}}>Iniciar</button>
            </div>    
        </TimerContext.Provider>
    );
}

export default Timer;