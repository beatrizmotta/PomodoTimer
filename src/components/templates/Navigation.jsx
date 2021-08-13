import React from 'react';
import Button from './Button';
import './Navigation.css'

const initialPage = 'pomodoro'

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.getCurrentPage = this.getCurrentPage.bind(this)
    }
    getCurrentPage(e) {
        this.props.onEvent(e)
    }
    render() {
        return (
                <div className="navegacao">
                    <Button onEvent={this.getCurrentPage} timer={'pomodoro'}>Pomodoro</Button>
                    <Button onEvent={this.getCurrentPage} timer={'shortrest'} >Pausa Rápida</Button>
                    <Button onEvent={this.getCurrentPage} timer={'longrest'} >Pausa Longa</Button>
                </div>
        );
    }
}

export default Navigation;