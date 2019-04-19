import React, { Component } from 'react';
import { Button, Container } from 'semantic-ui-react';
import ChoiceScenario from './ChoiceScenario';
import Say from 'react-say';

export default class History extends Component {
  constructor(props) {
    super(props);
    this.choice = new ChoiceScenario();
    this.state = {
      format: this.choice.scenario1()
    }
  }

  next = (param) => {
    const next = this.state.format.answerChoice[param].nextFunction;
    console.log(this.state)
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
    if (this.state.format.eggs === true) {
      this.getEggs();
    } else {
      this.deleteEggs();
    }
    return (
      <div>
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
      </div >
    );
  }
}