import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.onEvent(this.props.timer)
    }

    render() {
        return (
            <a onClick={this.handleClick} className="link">
                {this.props.children}
            </a>
        )
    }
}


export default Button