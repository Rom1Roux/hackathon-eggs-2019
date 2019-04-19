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
  }

  render() {
    return (
      <div className="App">
      <h1 className='titleApp'>Escape Eggs</h1>
      {/* <FinalGame /> */}
      {this.state.player !== null ?
        <Start player={this.state.player} heroId={this.state.heroId}/> :
        <SelectHeroes isConnected={this.isConnected}/> 
      }
      </div>
    );
  }
}

export default App;
