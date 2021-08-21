import React, { useState, useContext, useEffect } from 'react'
import { AnimationContext } from '../../contexts/AnimationContext'
import {PageContext} from '../../contexts/PageContext'
import play from '../../assets/gifs/icons8-play-30.png'
import pause from '../../assets/gifs/icons8-pause-60.png'
import reset from '../../assets/gifs/icons8-reset-48.png'

function TextTimer(props) {

    const { startContext, pauseContext, runningContext} = useContext(AnimationContext)
    const [animationHasStarted, setHasStarted] = startContext
    const [animationHasPaused, setHasPaused] = pauseContext
    const [isRunning, setIsRunning] = runningContext

    const {setPage} = useContext(PageContext)

    let alert
    let nextpage
    switch (props.name) {
        case 'shortrest':
            alert = 'Sua pausa de 5 minutos acabou! Vamos voltar ao trabalho?'
            nextpage = 'pomodoro'
            break;
        case 'longrest':
            alert = 'Muito bem!'
            nextpage = 'pomodoro'
            break;
        case 'pomodoro':
            alert = 'Bom trabalho! Que tal dar uma pausa?'
            nextpage = 'shortrest'
            break;
        default:
            break;
    }

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
        let clock = `${minutes}:${seconds}`
        if (time == 0) {
            resetTimer()
            window.alert(alert)
            setPage(nextpage)
        } else {
            return clock
        }
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

    function resetTimer() {
        setHasStarted(false)
        setIsRunning(false)
        setHasPaused(true)
        setTimer(tempoInicialEmMinutos)
    }

    return (
        <div className="timer">
            <h1>
                {treat(timer)}
            </h1>
            <div className="controls">
            <button style={{backgroundColor: props.color}} onClick={() => handlePlay()}>
                <img src={play} alt="" />
            </button>
            <button style={{backgroundColor: props.color, filter: 'hue-rotate(50)'}} onClick={() => handlePause()}>
                <img src={pause} alt="" />
            </button>
            <button style={{backgroundColor: props.color}} onClick={() => resetTimer()}>
                <img src={reset} style={{width: 25, height: 25}} alt="" />
            </button>
            </div>
        </div>
    )
}

export default TextTimer;