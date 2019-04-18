class ChoiceScenario {
  scenario1 = () => {
    const res = {
      histoire: 'Notre ami de toujours, Michel Drucker s\'interoge sur la disparition des oeufs de paques, rendez-vous en Australie ...',
      answerChoice: {
        one: {
          text: '... en avions',
          nextFunction: 'scenarioAvion', // L'avion crash
        },
        two: {
          text: '... en bateau',
          nextFunction: 'scenarioBateau', // un satellite détruit par l'inde écrase le bateau
        },
        three: {
          text: '... en vélo éléctrique aquatique',
          nextFunction: 'scenarioVelo',
        },
      }
    }
    return res;
  }

  /****** Avions ******/
  scenarioAvion = () => {
    const res = {
      histoire: 'Dans l\'avion, l\'hôtesse te demande de d\'attacher ta ceinture',
      answerChoice: {
        one: {
          text: 'Tu sautes',
          nextFunction: 'scenarioMortSaut',
        },
        two: {
          text: 'Tu obéis',
          nextFunction: 'scenarioObeis',
        },
        three: {
          text: 'Tu lances Candy Crush sur ton téléphone',
          nextFunction: 'scenarioCandyCrush',
        },
      }
    }
    return res;
  }
  scenarioMortSaut = () => {
    const res = {
      histoire: 'Quand tu as ouvert la porte de secours, tu as provoqué le crash de l\'avion',
      answerChoice: {
        one: {
          text: 'Perdu',
          nextFunction: 'scenario1',
        },
        two: {
          text: 'Perdu',
          nextFunction: 'scenario1',
        },
        three: {
          text: 'Perdu',
          nextFunction: 'scenario1',
        },
      }
    }
    return res;
  }
  scenarioObeis = () => {
    const res = {
      histoire: 'Le voyage c\'est passé sans problème, tu attéris en Australie et tu rejoins Michel qui t\'amène sur les lieux de l\'enquête, après de longue heures de voiture, vous avez faim, vous vous arrêtez pour manger un bout.',
      answerChoice: {
        one: {
          text: 'Dans un Mcdonald',
          nextFunction: 'scenarioMcdonald',
        },
        two: {
          text: 'Dans une poubelle', // oeuf +1
          nextFunction: 'scenarioPoubelle',
        },
        three: {
          text: 'Le hérisson que Michel vient d\'écraser',
          nextFunction: 'scenarioHerisson',
        },
      }
    }
    return res;
  }
  scenarioMcdonald = () => {
    const res = {
      histoire: 'Michel s\'est étouffé avec une paille' ,
      answerChoice: {
        one: {
          text: 'Perdu',
          nextFunction: 'scenario1',
        },
        two: {
          text: 'Perdu',
          nextFunction: 'scenario1',
        },
        three: {
          text: 'Encore Perdu',
          nextFunction: 'scenario1',
        },
      }
    }
    return res;
  }
  scenarioPoubelle = () => {
    const res = {
      histoire: 'Vous êtes fait pour être un enquetteur !! Vous trouvez un oeuf de paques au fond de la poubelle ' ,
      answerChoice: {
        one: {
          text: 'Vous le prenez',
          nextFunction: 'scenario1', // changer scénario
        },
        two: {
          text: 'Vous êtes un looser',
          nextFunction: 'scenario1',
        },
        three: {
          text: 'Choissisez la première solution',
          nextFunction: 'scenario1',
        },
      }
    }
    return res;
  }
  scenarioCandyCrush = () => {
    const res = {
      histoire: 'Bravo ! Tu as dépassé le niveau 1000 de Candy Crush ! Tu as enfin réussi un truc dans ta vie. Ce cher Michel t\'attend dans sa voiture pour aller sur les lieux de l\'enquête. Cependant, en sortant de l\'avion tu te prend le pied dans une marche et tu meurs.',
      answerChoice: {
        one: {
          text: 'Perdu',
          nextFunction: 'scenario1',
        },
        two: {
          text: 'Perdu',
          nextFunction: 'scenario1',
        },
        three: {
          text: 'Perdu',
          nextFunction: 'scenario1',
        },
      }
    }
    return res;
  }
  scenarioBateau = () => {
    const res = {
      histoire: '',
      answerChoice: {
        one: {
          text: '',
          nextFunction: 'scenario1',
        },
        two: {
          text: '',
          nextFunction: 'scenario1',
        },
        three: {
          text: '',
          nextFunction: 'scenario1',
        },
      }
    }
    return res;
  }
  scenarioVelo = () => {
    const res = {
      histoire: '',
      answerChoice: {
        one: {
          text: '',
          nextFunction: '',
        },
        two: {
          text: '',
          nextFunction: '',
        },
        three: {
          text: '',
          nextFunction: '',
        },
      }
    }
    return res;
  }
}
export default ChoiceScenario;