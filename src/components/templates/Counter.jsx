import React from 'react'
import './Counter.css'
import Timer from './Timer'

class Counter extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        switch (this.props.name) {
            case 'pomodoro':
                return (
                    <div className="counter">
                        <Timer className="timer" timer={1500} radius={310} started={false}/>
                    </div>
                )
                break;
            case 'shortrest':
                return (
                    <div className="counter">
                        <Timer className="timer" timer={300} radius={310} color={"#FF5B3D"} started={false}/>
                    </div>
                )
                break;
            case 'longrest':
                return (
                    <div className="counter">
                        <Timer className="timer" timer={900} radius={310} color={"#ff8b3d"} started={false}/>
                    </div>
                )
                break;

            default:
                break;
        }
    }

}

export default Counter