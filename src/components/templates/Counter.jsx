import React from 'react'
import './Counter.css'
import Timer from './Timer'

class Counter extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<Timer {...this.props} />)
    }

}

export default Counter