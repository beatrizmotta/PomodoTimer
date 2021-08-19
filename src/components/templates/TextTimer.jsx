import React, { useState, useContext, useEffect } from 'react'
import { AnimationContext } from '../../contexts/AnimationContext'

function TextTimer(props) {

    const { startContext, pauseContext } = useContext(AnimationContext)
    const [animationHasStarted, setHasStarted] = startContext
    const [animationHasPaused, setHasPaused] = pauseContext

    /*
        Não podemos fazer um:
        if (animationHasStarted === true) {do something...}
        o valor SEMPRE vai ser verdadeiro. Então entraremos num loop infinito.
    */  
    console.log(animationHasPaused)
    const tempoInicialEmMinutos = props.tempo
    const [timer, setTimer] = useState(tempoInicialEmMinutos)

    let timerInterval
    
    function startAnimation() {
        setHasStarted(true)
        timerInterval = setInterval(() => {
            setTimer(t => t - 1)
        }, 1000)
    }
    function unpauseAndClearInterval() {
        animationHasPaused ? setHasPaused(false) : setHasPaused(true)
    }
    useEffect(() => {
        if (animationHasPaused) {
           clearInterval(timerInterval)
        }
    }, [timerInterval])

    function treat(time) {
        const minutes = Math.floor(time / 60)
        let seconds = time % 60
        seconds = seconds < 10 ? '0' + seconds : seconds
        return `${minutes}:${seconds}`
    }

    return (
        <>
            <h1>
                {treat(timer)}
            </h1>
            <button onClick={() => startAnimation()}>Iniciar</button>
            <button onClick={() => unpauseAndClearInterval()}>{animationHasPaused ? 'Despausar' : 'Pausar'}</button>
        </>
    )
}

export default TextTimer;