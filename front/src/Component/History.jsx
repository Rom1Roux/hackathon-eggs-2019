import React, { Component } from 'react';
import { Button, Container } from 'semantic-ui-react';
import ChoiceScenario from './ChoiceScenario';
import Say from 'react-say';
import FinalGame from './FinalGame';

export default class History extends Component {
  constructor(props) {
    super(props);
    this.choice = new ChoiceScenario();
    this.state = {
      format: this.choice.scenario1(),
      bonusStage: null,
    }
  }

  next = (param) => {
    const next = this.state.format.answerChoice[param].nextFunction;
    this.setState({ format: this.choice[next]() });
  }

  getEggs = () => {
    const param = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ pseudo: this.props.player })
    }
    fetch('/back/newEggs', param)
  }

  deleteEggs = () => {
    const param = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ pseudo: this.props.player })
    }
    fetch('/back/delEggs', param)
  }

  render() {
    const { histoire, answerChoice } = this.state.format;
    const { bonusStage } = this.state;
    let oldState = true;
    if ( this.state.format.eggs === true && oldState === true ) {
      this.getEggs();
      oldState = false;
    } else {
      this.deleteEggs();
    }
    return (
      <div style={{
        backgroundImage: "url('http://www.mobileswall.com/wp-content/uploads/2015/08/640-Dawn-in-Forest-l.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height:'640px',
        overflow: 'hidden'
      }}>
      {this.state.format.bonusStage === true ? <FinalGame /> : 
        <Container>
          <p className='mobilePolicie'>{histoire}</p>
          <Say speak={histoire} />
          <Button.Group vertical>
            <div className='buttonChoice'>
              <Button onClick={() => this.next('one')} color='red'>{answerChoice.one.text}</Button>
            </div>
            <div className='buttonChoice'>
              <Button onClick={() => this.next('two')} color='red'>{answerChoice.two.text}</Button>
            </div>
            <div className='buttonChoice'>
              <Button onClick={() => this.next('three')} color='red'>{answerChoice.three.text}</Button>
            </div>
          </Button.Group>
        </Container>
      }
      </div >
    );
  }
}