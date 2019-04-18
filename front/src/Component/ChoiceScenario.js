class ChoiceScenario {
  constructor(name, species, image) {
    this.namePerso = name;
    this.speciesPerso = species;
    this.imagePerso = image;
  }
  scenario1 = () => {
    const res = {
      histoire: 'blabla',
      answerChoice: {
        one: {
          text: 'one',
          nextFunction: 'scenario2',
        },
        two: {
          text: 'two',
          nextFunction: 'scenariofaux',
        },
        three: {
          text: 'tree',
          nextFunction: 'scenariofaux',
        },
      }
    }
    return res; 
  }
  scenario2 = () => {
    const res = {
      histoire: 'tu vois sur ton chemin une pizza',
      answerChoice: {
        one: {
          text: 'tu la mange',
          nextFunction: 'scenario2',
        },
        two: {
          text: 'tu la jete',
          nextFunction: 'scenariofaux',
        },
        three: {
          text: 'tu marche dessus',
          nextFunction: 'scenariofaux',
        },
      }
    }
    return res; 
  }
  futurFunction2 = () => {

  }
  futurFunction3 = () => {

  }
}
export default ChoiceScenario;