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
             <Say speak="GROS PAVÉ DE TEXTE QUI EXPLIQUE L'HISTOIRE" />
            <p>GROS PAVÉ DE TEXTE QUI EXPLIQUE L'HISTOIRE</p>
            <Button className='buttonChoice' onClick={this.startHistory}>GOOO !</Button>
          </div>
          :
          <History heroId={this.props.heroId}/>
        }
      </div>
    );
  }
}