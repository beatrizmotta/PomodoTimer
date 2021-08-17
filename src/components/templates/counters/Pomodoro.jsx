import React from 'react';
import Timer from '../Timer'


function Pomodoro(props) {
    return (
        <Timer className="timer" timer={1500} radius={310} />
    );
}

export default Pomodoro;