import Counter from './components/templates/Counter';
import Logo from './components/templates/Logo'
import Navigation from './components/templates/Navigation'
import './App.css';
import React from 'react';

const initialState = {
  currentPage: 'pomodoro'
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ...initialState
    }
    this.onEvent = this.onEvent.bind(this)
  }

    onEvent(state) {
      this.setState({currentPage: state})
    }

render() {
  return (
    <div className="main">
      <Logo />
      <Navigation onEvent={this.onEvent}/>
      <div className='content'>
        <Counter name={this.state.currentPage} />
      </div>

      {/* <div className="content hidden">
          <Counter timer={6} radius={310} />
        </div> */}
      {/* <div className="content hidden timer2">
          <Counter timer={10} radius={310} color="#FF5B3D" /> 
        </div>
        <div className="content hidden timer3">
          <Counter timer={10} radius={310} color="#ff8b3d" /> 
        </div> */}
    </div>
  );
}
}


export default App;
