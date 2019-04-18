import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
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


  componentDidMount() {
  }

  next = (param) => {
    const next = this.state.format.answerChoice[param].nextFunction;
    this.setState({ format: this.choice[next]() });
  }

  render() {
    const { histoire, answerChoice } = this.state.format;
    return (
      <div>

        <p>{histoire}</p>
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
      </div >
    );
  }
}