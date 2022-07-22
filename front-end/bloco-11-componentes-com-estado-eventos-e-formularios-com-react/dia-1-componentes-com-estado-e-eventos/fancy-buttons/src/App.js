import './App.css';
import React from 'react';

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      clicks1: 0,
      clicks2: 0,
      clicks3: 0,
      color1: 'white',
      color2: 'white',
      color3: 'white'
    }
  }

  colorindo = (param) => (this.state[param] % 2 === 1) ? 'green': 'white';

  stateSetter(states, states2) {
    this.setState((before) => ({
      [states]: before[states] + 1,
      [states2]: this.colorindo(states)
    }))
    console.log(this.colorindo(states));
  }
  
  render () {
    return (
      <div className="App-header">
        <button id='clicks1' onClick={() => this.stateSetter('clicks1', 'color1')} style={{backgroundColor: this.state.color1}}>clicks {this.state.clicks1}</button>
        <button id='clicks2' onClick={() => this.stateSetter('clicks2', 'color2')} style={{backgroundColor: this.state.color2}}>clicks {this.state.clicks2}</button>
        <button id='clicks3' onClick={() => this.stateSetter('clicks3', 'color3')} style={{backgroundColor: this.state.color3}}>clicks {this.state.clicks3}</button>
      </div>
    );
  }
}

export default App;
