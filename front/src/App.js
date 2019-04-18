import React, { Component } from 'react';
import FinalGame from './Component/FinalGame';
import './CSS/App.css';
import SelectHeroes from './Component/SelectHeroes';
import Start from './Component/Start'

class App extends Component {

  state = {
    player: null,
    heroId: null,
  }

  isConnected = (nickname, hero) => {
    this.setState({ player: nickname, heroId: hero})
    console.log(nickname, hero)
  }

  render() {
    return (
      <div className="App">
      <h1>Escape Eggs</h1>
      {/* <FinalGame /> */}
      {this.state.player !== null ?
        <Start heroId={this.state.heroId}/> :
        <SelectHeroes isConnected={this.isConnected}/> 
      }
      </div>
    );
  }
}

export default App;
