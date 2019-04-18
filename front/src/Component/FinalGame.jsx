import React, { Component } from 'react';
import '../CSS/imgRotate.css';

class FinalGame extends Component {
  constructor(props) {
    super(props);
    this.state = { etat: false };
  }
  imageClick = () => {
    console.log('Click');
  }
  render() {
    return (
      <div className="eggsFinal">
        <button onClick={() => this.imageClick()} ><img src={'https://a9effd958e0dc59aaf3b-80520a33cc33a15351bd958c9b8ecc55.ssl.cf2.rackcdn.com/one-step/graphic-egg.png'} alt='eggs' /></button>
      </div>
    );
  }
}

export default FinalGame;
