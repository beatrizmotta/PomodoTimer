import React, {useState} from 'react'
import './Timer.css'
import {AnimationContext} from '../../contexts/AnimationContext'
import TimerSvg from './svgs/TimerSvg'
import TextTimer from './TextTimer'

function Timer(props) {

    const [animationHasStarted, setHasStarted] = useState(false)
    const [animationHasPaused, setHasPaused] = useState(true)
    const [isRunning, setIsRunning] = useState(false)


    function toggleStartOrEndAnimation() {
        animationHasStarted === true ? setHasStarted(false) : setHasStarted(true)
    }

    function togglePauseAnimation() {
        animationHasPaused === true ? setHasPaused(false) : setHasPaused(true)
    }


    return(
        <AnimationContext.Provider value={{startContext: [animationHasStarted, setHasStarted], pauseContext: [animationHasPaused, setHasPaused], runningContext: [isRunning, setIsRunning]}}>

        <div {...props}>
            <TimerSvg {...props}>
                <TextTimer {...props} tempo={props.timer} color={props.color || "#82BAED"}/>
            </TimerSvg>
        </div>
        
        </AnimationContext.Provider>
    )
}

export default Timer;