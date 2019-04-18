import React, { Component } from 'react';
import ChoiceScenario from './ChoiceScenario';

export default class Action extends Component {
  constructor(props){
    super(props);
    this.choice = new ChoiceScenario();
  }

  render() {
    return (
      <div>
        <p>{this.props.history}</p>
      </div>
    );
  }
}
