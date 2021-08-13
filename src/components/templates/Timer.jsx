import React from 'react'
import './Timer.css'

function toggle(element) {
    if (element == true) {
        return false
    } else {
        return true
    }
}

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isStarted: '',
            stop: '',
            date: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.restart = this.restart.bind(this)
    }
    componentDidMount() {
        this.setState({isStarted: false})
        this.setState({date: this.props.timer/6})
    }
    componentWillUnmount() {
        this.setState({isStarted: false})
    }
    handleClick() {
        this.setState({isStarted: toggle(this.state.isStarted)})
    }
    restart() {
        this.setState({isStarted: false})
    }
    render() {
        return (
            <div className="timer">
                <svg width={this.props.radius * 2} height={this.props.radius * 2} viewBox={`0 0 760 760`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="circle" filter="url(#filter0_i)">
                    <text x="40%" y="-49%" className="text">{this.props.timer/60}</text>
                        <circle onAnimationEnd={this.restart} className={`${this.state.isStarted == true ? 'animated' : 'beforeStart'}`} style={{ animationDuration: `${this.props.timer}s` }} cx="379.5" cy="379.5" r={this.props.radius} stroke={this.props.color || "#82BAED"} stroke-width={this.props.radius / 8} />
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
                <button onClick={this.handleClick}>Start Timer</button>
            </div>
        )
    }
}

export default Timer