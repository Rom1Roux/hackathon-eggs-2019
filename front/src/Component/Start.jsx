import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import History from './History';
import Say from 'react-say';

export default class Start extends Component {

  state = {
    start: false
  }

  startHistory = () => {
    this.setState({ start: true })
  };

  render() {
    return (
      <div>
        {this.state.start !== true ?
          <div>
            <Say speak="Bravo ! vous avez été sélectionné parmis les derniers des loosers...
            Si vous souhaitez remonter dans l'estime de votre entourage, resolvez cette enquête." />
            <p>Bravo ! vous avez été sélectionné parmis les derniers des loosers... <br />
            Si vous souhaitez remonter dans l'estime de votre entourage, resolvez cette enquête.</p>
            <Button color='red' className='buttonChoice' onClick={this.startHistory}>D'accord</Button>
            <Button color='red' className='buttonChoice' onClick={() => alert('Tu es encore pire que ce que j\'imaginais')}>Je ne peux pas j'ai piscine</Button>
          </div>
          :
          <History player={this.props.player} heroId={this.props.heroId}/>
        }
      </div>
    );
  }
}