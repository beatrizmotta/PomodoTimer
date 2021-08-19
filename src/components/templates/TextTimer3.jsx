import React, { Component} from 'react';
import { AnimationContext } from '../../contexts/AnimationContext'



class TextTimer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: this.treatTimer(this.props.tempo),
            timerstarted: ''
        }
    }
    componentDidMount() {
        console.log(this)
        const {startContext} = this.context
        const [animationHasStarted] = startContext
        console.log(animationHasStarted)
        
        this.setState({timerstarted: animationHasStarted})

        console.log('a', this.state.timerstarted)
    }
    componentDidUpdate() {
        
    }
    treatTimer(t) {
        const minutes = Math.floor(t/60)
        let seconds = t % 60
        seconds = seconds < 10 ? '0' + seconds : seconds
        return `${minutes}:${seconds}`
    }
    
    // componentDidMount() {
        //     this.setState({timer: this.treatTimer(this.props.tempo)})
        // }
        // static contextType = AnimationContext
        render() {
            
            return (
                <div>
                <h1>{`a`}</h1>
            </div>
        );
    }
}

TextTimer.contextType = AnimationContext

export default TextTimer;


    
    
    
    
    
        // function treat(time) {
        //     const minutes = Math.floor(time / 60)
        //     let seconds = time % 60
        //     seconds = seconds < 10 ? '0' + seconds : seconds
        //     return `${minutes}:${seconds}`
        // }