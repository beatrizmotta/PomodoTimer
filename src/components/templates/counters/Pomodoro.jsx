import React from 'react';
import Timer from '../Timer'


function Pomodoro(props) {
    return (
        /*
         * (Acontece o mesmo em LongRest.jsx e ShortRest.jsx)
         * O componente POMODORO/LONGREST/SHORTREST então renderiza o componente Timer, passando como
         * props o tempo de cada temoprizador, a cor do mesmo (no caso do Pomodoro ele está na cor de-
         * fault) e o raio da circunferência.
         * 
        */
        <Timer className="timer pomodoro" name="pomodoro" timer={1500} radius={310} />
    );
}

export default Pomodoro;