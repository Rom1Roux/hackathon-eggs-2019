import michelDrucker from '../img/Michel-drucker.jpeg';
import hotesse from '../img/hotesse-de-lair.jpg';
import crashAvion from '../img/crash-avion.jpg';
import poubelleOrnithorynque from '../img/agress-poubelle-ornithorynque.jpg';
import candyCrushGameOver from '../img/Candy-Crush-Game-Over.jpg';
import elevageFuret from '../img/elevage-de-furet.jpg';
import lotoGagnant from '../img/loto-gagnant.jpg';
import druckerPaille from '../img/Michel-Drucker-paille.jpg';
import poubelle from '../img/poubelle-fond-blanc.jpg';
import roadTripAustralia from '../img/road-trip-en-australie-6.jpg';

class ChoiceScenario {
  scenario1 = () => {
    const res = {
      histoire: 'Notre ami de toujours, Michel Drucker s\'interoge sur la disparition des oeufs de paques, rendez-vous en Australie ...',
      image: michelDrucker,
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
      histoire: 'Michel s\'est étouffé avec une paille' ,
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
      histoire: 'Vous êtes fait pour être un enquetteur !! Vous trouvez un oeuf de paques au fond de la poubelle.' ,
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
  scenarioPoubelleOeuf = () => {
    const res = {
      histoire: 'Suite à votre découverte, vous décidez d\'enquêter dans les environs, quand soudains...' ,
      image: poubelleOrnithorynque,
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
      histoire: 'Vous abandonez Michel et vous foncez vers le premier tabac pour valider votre Jackpot ! Félicitation vous avez gagné la somme de 2€' ,
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
      histoire: 'Absolument rien.' ,
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
      histoire: 'L\'ornithorynque semble avoir des oeufs avec lui, et s\'apprête à vous les lancer' ,
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
      bonusStage: true
    }
    return res;
  }
  bonusStage = () => {
    const res = {
      histoire: '' ,
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
    }
    return res;
  }
  scenarioFuite = () => {
    const res = {
      histoire: 'C\'était une excelente idée mais on s\'égare un peu de l\'histoire' ,
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
      histoire: 'Votre stupidité ne mérite même pas d\'être remarqué.' ,
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