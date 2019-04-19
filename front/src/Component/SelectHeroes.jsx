import React, { Component } from 'react';
import { Input, Icon, Card, Image, Button } from 'semantic-ui-react';

export default class SelectHeroes extends Component {

  state = {
    pseudo: null,
    heroes: null,
  }

  componentDidMount = () => {
    const param = {
      method: 'GET',
      header: ('Content-Type: application/json'),
    }
    fetch('/back/selectHeroes', param)
      .then(res => res.json())
      .then(res => this.setState({ choose: res }))
  }

  handleChangeInput = (event) => this.setState({ pseudo: event.target.value });

  callback = (heroes) => {
    this.setState({ heroes: heroes })
  }

  validation = () => {
    const { pseudo, heroes } = this.state;
    if(pseudo !== null || heroes !== null){
      const hero = { heroId: heroes.id, pseudo: pseudo};
      const option = {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(hero)
      }
      fetch('/back/saveHeroes', option)
      .then(res => res.json())
      .then(res => {
        if(res.callback){
          this.props.isConnected(pseudo, hero.heroId);
        } else {
          alert('Le pseudo est déjà utilisé')
        }
      })
    }
  }

  render() {
    const { choose, pseudo } = this.state;
    return (
      <div>
        <form>
          <Input icon placeholder='Eggs Ass Perent'>
            <input
              type='text'
              onChange={this.handleChangeInput}
              required
            />
            <Icon name='play' />
          </Input>
        </form>
        <div className='flextest'>

          {choose !== undefined ?
            choose.map((elem, i) =>
              <DisplayChoose key={i} desc={elem} pseudo={pseudo} callback={this.callback}/>
            ) : ''}

        </div>

        <Button color='red' onClick={() => this.validation()}>Jouer !</Button>

      </div>
    );
  }
}

export class DisplayChoose extends Component {

  constructor(props) {
    super(props);
    const { name, species, image, id, gender } = this.props.desc;
    this.name = name;
    this.species = species;
    this.image = image;
    this.id = id;
    this.gender = gender;
    this.state = {
      heroes: null
    }
  }

  heoresSelected = () => {
    this.props.callback(this.props.desc);
  }

  render() {
    return (
      <div>
        <Card.Group itemsPerRow={1}>
          <Card onClick={this.heoresSelected}>
            <Image src={this.image} />
            <Card.Content>
              <Card.Header>{this.name}</Card.Header>
              <Card.Meta>
                <span className='date'>Gender : {this.gender}</span>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Icon name='user' />
              {this.species}
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}