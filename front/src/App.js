import React, { Component } from 'react';
import FinalGame from './Component/FinalGame';
import './CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Escape Eggs</h1>
      <FinalGame />
      </div>
    );
  }
}

export default App;
