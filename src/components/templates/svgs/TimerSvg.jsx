import React, { useState, useContext } from 'react';
import { TimerContext } from '../../../contexts/TimerContext';
import TextTimer from '../TextTimer';

function TimerSvg(props) {
    const {timer} = useContext(TimerContext)
    const {setTimer} = useContext(TimerContext)
    return (
        <svg className={timer} onAnimationEnd={() => {alert('Acabou'); setTimer('stable')}} style={{ animationDuration: `${props.timer}s` }} width={props.radius * 2} height={props.radius * 2} viewBox={`0 0 760 760`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="circle" filter="url(#filter0_i)">
                    <TextTimer x="40%" y="-49%" className="text" seconds={props.timer} isStarted={timer}></TextTimer>
                    <circle className="circleTimer" cx="379.5" cy="379.5" r={props.radius} stroke={props.color || "#82BAED"} stroke-width={props.radius / 8} />
                </g>
                <defs>
                    <filter id="filter0_i" x="41" y="41" width="677" height="681" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                    </filter>
                </defs>
            </svg>
    );
}

export default TimerSvg