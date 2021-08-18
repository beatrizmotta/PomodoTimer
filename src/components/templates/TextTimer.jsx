import React, { useState, useEffect } from 'react'

function TextTimer(props) {
    const initialTimer = props.seconds
    const [seconds, setSeconds] = useState(initialTimer)
    
    useEffect(() => {
        window.setInterval(() => {
            setSeconds(seconds => seconds+1)
        }, 1000)
    }, [])

    return (
        <>
            <text x="40%" y="-49%" className="text">
                {seconds}
            </text>
        </>
    )
}

export default TextTimer;

// let counter = 0
// function getTime() {
//     if (props.isStarted == 'stable') {
//         return `${initialtime}:00`
//     } else {
//         const startingMinutes = initialtime
//         let time = startingMinutes * 60
//         const minutes = Math.floor(time / 60)
//         let seconds = time % 60
//         seconds = seconds < 10 ? '0' + seconds : 'seconds'
//         time--
//         return `${minutes}:${seconds}`
//     }
// }