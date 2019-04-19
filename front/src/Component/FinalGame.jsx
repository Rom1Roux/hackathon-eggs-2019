import React, { Component } from 'react';
import '../CSS/imgRotate.css';

class FinalGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incrementation: true,
      rapid: 100,
      eggs: [
        "https://cdn.shopify.com/s/files/1/0993/5182/products/CXBO_Chocolate_Disco_Egg_large.png?v=1519913456", 'https://shop.whitehousehistory.org/media/catalog/product/t/r/trump_egg_gold_shop.png',
        "https://shop.whitehousehistory.org/media/catalog/product/t/r/trump_egg_gold_shop.png", 'https://shop.whitehousehistory.org/media/catalog/product/t/r/trump_egg_gold_shop.png',
        "https://www.buttermilk.co.uk/wp-content/uploads/2018/02/css-egg-web.png",
        "http://pixelartmaker.com/art/2480187d8bd9102.png",
        "https://vignette.wikia.nocookie.net/bubble-gum-simulator/images/7/72/Lucky_Egg.png/revision/latest?cb=20190315192058",
        "https://shop.whitehousehistory.org/media/catalog/product/t/r/trump_egg_gold_shop.png",
        "https://www.buttermilk.co.uk/wp-content/uploads/2018/02/css-egg-web.png",
        "https://www.sideshow.com/storage/product-images/903635/velociraptor-egg_jurassic-park_silo.png",
        "https://i1.wp.com/borgattis.com/wp-content/uploads/2019/03/blue-egg.png?fit=861%2C877&ssl=1",
        "https://shop.whitehousehistory.org/media/catalog/product/t/r/trump_egg_gold_shop.png"
      ],
      score: 0
    };
  }
  imageClick = (index) => {
    const { eggs } = this.state;
    this.setState({ score: this.state.score + 1 });
    eggs.splice(index, 1);
    // eggs.push()
  }
  componentDidMount() {
    const { rapid } = this.state;
    console.log(rapid);
    setInterval(this.moveImage, rapid);
  }
  moveImage = (param) => {
    switch (param) {
      case 'padLeft':
        return Math.floor(Math.random() * 300) + 10;
      case 'padButton':
        return Math.floor(Math.random() * 600) + 10;
      case 'rotate':
        return Math.floor(Math.random() * 360) + 0;
      default:
        return;
    }

  }

  render() {
    const { eggs, score } = this.state;
    if(score >= 10){
      alert('Félicitation, vous avez réussie à résoudre cette enquête, mais vous êtes quand même minable');
      this.props.restartGame();
    }
    return (
      <div>
        <h1 className='titleFinalGame'>Counter: {score} </h1>
        {eggs.map((ClickEggs, i) => {
          return (
            <div key={'eggs' + i} className="eggsFinal" style={{
              paddingLeft: `${this.moveImage('padLeft')}px`,
              paddingBottom: `${this.moveImage('padButton')}px`,
              transform: `rotate(${this.moveImage('rotate')}deg)`,
            }}>
              <button key={'eggs' + i} onClick={() => this.imageClick(i)} ><img key={'eggs' + i} src={ClickEggs} alt='eggs' /></button>
            </div>
          )
        })
        }
      </div >
    );
  }
}

export default FinalGame;
