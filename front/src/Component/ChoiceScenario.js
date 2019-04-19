const michelDrucker = 'https://image.noelshack.com/fichiers/2019/16/5/1555679285-michel-drucker.jpeg';
const hotesse = 'https://image.noelshack.com/fichiers/2019/16/5/1555679030-hotesse-de-lair.jpg';
const crashAvion = 'https://image.noelshack.com/fichiers/2019/16/5/1555679032-crash-avion.jpg';
const duelOrnithorynque = 'https://image.noelshack.com/fichiers/2019/16/5/1555679031-agress-poubelle-ornithorynque.jpg';
const candyCrushGameOver = 'https://image.noelshack.com/fichiers/2019/16/5/1555679031-candy-crush-game-over.jpg';
const elevageFuret = 'https://image.noelshack.com/fichiers/2019/16/5/1555679031-elevage-de-furet.jpg';
const lotoGagnant = 'https://image.noelshack.com/fichiers/2019/16/5/1555679662-loto-gagnant.jpg';
const druckerPaille = 'https://image.noelshack.com/fichiers/2019/16/5/1555679285-michel-drucker-paille.jpg';
const poubelle = 'https://image.noelshack.com/fichiers/2019/16/5/1555679285-poubelle-fond-blanc.jpg';
const roadTripAustralia = 'https://image.noelshack.com/fichiers/2019/16/5/1555679285-road-trip-en-australie-6.jpg';
const meteoriteOcean = 'https://image.noelshack.com/fichiers/2019/16/5/1555679285-meteorite-ocean.jpg';
const hydrofoilBike = 'https://image.noelshack.com/fichiers/2019/16/5/1555679031-hydrofoil-bike.jpg';
const ornithorynque = 'https://leblogdunem.files.wordpress.com/2012/07/pbzy8.gif';
const herisson = 'https://image.noelshack.com/fichiers/2019/16/5/1555679661-herisson.jpg';
const rien = 'https://image.noelshack.com/fichiers/2019/16/5/1555679661-mordor.jpg';
const homerSimpson = 'https://image.noelshack.com/fichiers/2019/16/5/1555679662-homer-simpson.png';

class ChoiceScenario {
  scenario1 = () => {
    const res = {
      histoire: 'Notre ami de toujours, Michel Drucker s\'interoge sur la disparition des oeufs de paques, rendez-vous en Australie ...',
      image: michelDrucker,
      answerChoice: {
        one: {
          text: '... en avions',
          nextFunction: 'scenarioAvion',
        },
        two: {
          text: '... en bateau',
          nextFunction: 'scenarioBateau',
        },
        three: {
          text: '... en vélo aquatique',
          nextFunction: 'scenarioVelo',
        },
      }
    }
    return res;
  }
  /****** Avions ******/
  scenarioAvion = () => {
    const res = {
      histoire: 'Dans l\'avion, l\'hôtesse vous demande d\'attacher votre ceinture',
      image: hotesse,
      answerChoice: {
        one: {
          text: 'Vous sautez',
          nextFunction: 'scenarioMortSaut',
        },
        two: {
          text: 'Vous obéissez',
          nextFunction: 'scenarioObeis',
        },
        three: {
          text: 'Vous lancez Candy Crush sur votre téléphone',
          nextFunction: 'scenarioCandyCrush',
        },
      }
    }
    return res;
  }
  scenarioMortSaut = () => {
    const res = {
      histoire: 'Quand vous avez ouvert la porte de secours, vous avez provoqué le crash de l\'avion',
      image: crashAvion,
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
      histoire: 'Le voyage c\'est passé sans problème, vous attérissez en Australie et vous rejoignez Michel qui vous amène sur les lieux de l\'enquête, après de longue heures de voiture, vous avez faim, vous vous arrêtez pour manger un bout.',
      image: roadTripAustralia,
      answerChoice: {
        one: {
          text: 'Dans un Mcdonald',
          nextFunction: 'scenarioMcdonald',
        },
        two: {
          text: 'Dans une poubelle',
          nextFunction: 'scenarioPoubelle',
        },
        three: {
          text: 'Du hérisson que Michel vient d\'écraser',
          nextFunction: 'scenarioHerisson',
        },
      }
    }
    return res;
  }
  scenarioMcdonald = () => {
    const res = {
      histoire: 'Michel s\'est étouffé avec une paille',
      image: druckerPaille,
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
      histoire: 'Vous êtes fait pour être un enquetteur !! Vous trouvez un oeuf de paques au fond de la poubelle.',
      image: poubelle,
      answerChoice: {
        one: {
          text: 'Vous le prenez',
          nextFunction: 'scenarioPoubelleOeuf', // changer scénario
        },
        two: {
          text: 'Vous êtes un looser',
          nextFunction: 'scenario1',
        },
        three: {
          text: 'Choissisez la première solution',
          nextFunction: 'scenario1erSolution',
        },
      },
      eggs: true
    }
    return res;
  }
  scenarioHerisson = () => {
    const res = {
      histoire: 'Nous sommes désolé, vous venez de vous planter une aigille dans la gorge. Vous êtes ratraprié d\'urgence en France car vous faites une réaction hallucinogène.',
      image: herisson,
      answerChoice: {
        one: {
          text: 'Tu es un looser',
          nextFunction: 'scenario1', // changer scénario
        },
        two: {
          text: 'Michel s\'inquiète pour vous',
          nextFunction: 'scenario1',
        },
        three: {
          text: 'Vous recommencez l\'enquête depuis le début',
          nextFunction: 'scenario1',
        },
      },
      eggs: true
    }
    return res;
  }
  scenarioPoubelleOeuf = () => {
    const res = {
      histoire: 'Suite à votre découverte, vous décidez d\'enquêter dans les environs, quand soudains...',
      image: poubelle,
      answerChoice: {
        one: {
          text: 'Vous tombez sur un ticket de loto gagnant !',
          nextFunction: 'scenarioLoto',
        },
        two: {
          text: 'Rien du tout...',
          nextFunction: 'scenarioRien',
        },
        three: {
          text: 'Un ornithorynque sauvage agressif apparaît',
          nextFunction: 'scenarioOrnithorynque',
        },
      },
    }
    return res;
  }
  scenarioLoto = () => {
    const res = {
      histoire: 'Vous abandonez Michel et vous foncez vers le premier tabac pour valider votre Jackpot ! Félicitation vous avez gagné la somme de 2€',
      image: lotoGagnant,
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
      },
    }
    return res;
  }
  scenarioRien = () => {
    const res = {
      histoire: 'Absolument rien.',
      image: rien,
      answerChoice: {
        one: {
          text: 'Rien',
          nextFunction: 'scenario1',
        },
        two: {
          text: 'Rien',
          nextFunction: 'scenario1',
        },
        three: {
          text: 'Pas grand chose... Non j\'ai menti, rien',
          nextFunction: 'scenario1',
        },
      },
    }
    return res;
  }
  scenarioOrnithorynque = () => {
    const res = {
      histoire: 'L\'ornithorynque semble avoir des oeufs avec lui, et s\'apprête à vous les lancer',
      image: ornithorynque,
      answerChoice: {
        one: {
          text: 'Prendre une batte de baseball et faire un homerun',
          nextFunction: 'bonusStage',
        },
        two: {
          text: 'Préparer sa défence',
          nextFunction: 'bonusStage',
        },
        three: {
          text: 'L\'ignorer et partir faire un élevage de furêt de afrique',
          nextFunction: 'scenarioFuite',
        },
      },
    }
    return res;
  }
  bonusStage = () => {
    const res = {
      histoire: '',
      image: duelOrnithorynque,
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
      },
      bonusStage: true
    }
    return res;
  }
  scenarioFuite = () => {
    const res = {
      histoire: 'C\'était une excelente idée mais on s\'égare un peu de l\'histoire',
      image: elevageFuret,
      answerChoice: {
        one: {
          text: 'Recommencer, encore une fois',
          nextFunction: 'scenario1',
        },
        two: {
          text: 'ALT F4',
          nextFunction: 'scenario1',
        },
        three: {
          text: 'La réponse 3',
          nextFunction: 'scenario1',
        },
      },
    }
    return res;
  }
  scenario1erSolution = () => {
    const res = {
      histoire: 'Votre stupidité ne mérite même pas d\'être remarqué.',
      image: homerSimpson,
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
      },
    }
    return res;
  }
  scenarioCandyCrush = () => {
    const res = {
      histoire: 'Bravo ! Vous avez dépassé le niveau 1000 de Candy Crush ! Vous avez enfin réussi un truc dans votre vie. Cependant, en sortant de l\'avion vous vous prennez le pied dans une marche et vous mourez.',
      image: candyCrushGameOver,
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
      histoire: 'Un astéroïde s\'écrase sur votre bateau, c\'est vraiment pas de chance',
      image: meteoriteOcean,
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
  scenarioVelo = () => {
    const res = {
      histoire: 'il a fallu seulement 3 ans de voyage en mer avec cette engin pour arriver en australie et vous rejoignez Michel qui vous amène sur les lieux de l\'enquête, après de longue heures de voiture, vous avez faim, vous vous arrêtez pour manger un bout.',
      image: hydrofoilBike,
      answerChoice: {
        one: {
          text: 'Dans un Mcdonald',
          nextFunction: 'scenarioMcdonald',
        },
        two: {
          text: 'Dans une poubelle',
          nextFunction: 'scenarioPoubelle',
        },
        three: {
          text: 'Du hérisson que Michel vient d\'écraser',
          nextFunction: 'scenarioHerisson',
        },
      }
    }
    return res;
  }
}
export default ChoiceScenario;