import React, {useState} from 'react'
import './Timer.css'
import {AnimationContext} from '../../contexts/AnimationContext'
import TimerSvg from './svgs/TimerSvg'
import TextTimer from './TextTimer'

function Timer(props) {

    const [animationHasStarted, setHasStarted] = useState(false)
    const [animationHasPaused, setHasPaused] = useState(false)


    function toggleStartOrEndAnimation() {
        animationHasStarted === true ? setHasStarted(false) : setHasStarted(true)
    }

    function togglePauseAnimation() {
        animationHasPaused === true ? setHasPaused(false) : setHasPaused(true)
    }


    return(
        <AnimationContext.Provider value={{startContext: [animationHasStarted, setHasStarted], pauseContext: [animationHasPaused, setHasPaused]}}>

        <div>
            <TimerSvg {...props}>
                <TextTimer tempo={props.timer} />
            </TimerSvg>
            {/* <button onClick={() => {toggleStartOrEndAnimation()}}>{animationHasStarted ? 'iniciada' : 'não iniciada'}</button>
            <button onClick={() => {togglePauseAnimation()}}>{animationHasPaused ? 'voltar' : 'pausar'}</button> */}
            <i>Se a animação foi settada pra começar mostra true, se não mostra falso.</i>
        </div>
        
        </AnimationContext.Provider>
    )
}

export default Timer;