import React, { useState, useContext, useEffect } from 'react'
import { AnimationContext } from '../../contexts/AnimationContext'

function TextTimer(props) {

    const { startContext, pauseContext, runningContext} = useContext(AnimationContext)
    const [animationHasStarted, setHasStarted] = startContext
    const [animationHasPaused, setHasPaused] = pauseContext
    const [isRunning, setIsRunning] = runningContext

    /*
        Não podemos fazer um:
        if (isRunning === true) {do something...}
        o valor SEMPRE vai ser verdadeiro. Então entraremos num loop infinito.
    */  
    const tempoInicialEmMinutos = props.tempo
    const [timer, setTimer] = useState(tempoInicialEmMinutos)
    const [intervalId, setIntervalId] = useState(false)

    useEffect(() => {
        if (isRunning) {
            const id = window.setInterval(() => {
                setTimer(t => t - 1)
            }, 1000)
            setIntervalId(id)
        } else {
            window.clearInterval(intervalId)
        }
    }, [isRunning])


    function treat(time) {
        const minutes = Math.floor(time / 60)
        let seconds = time % 60
        seconds = seconds < 10 ? '0' + seconds : seconds
        return `${minutes}:${seconds}`
    }
    function handlePlay() {
        setHasStarted(true)
        setIsRunning(true)
        setHasPaused(false)
    }
    function handlePause() {
        setHasStarted(true)
        setIsRunning(false)
        setHasPaused(true)
    }

    return (
        <div className="timer">
            <h1>
                {treat(timer)}
            </h1>
            <button onClick={() => handlePlay()}>Iniciar</button>
            <button onClick={() => handlePause()}>{animationHasPaused ? 'Despausar' : 'Pausar'}</button>
        </div>
    )
}

export default TextTimer;