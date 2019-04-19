const express = require('express');
const router = express.Router();
const connection = require('../../setting/config');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/selectHeroes', (req, res) => {
  const option = {
    method: 'GET',
    header: ('Content-Type: application/json'),
  }
  let heroesSelected = [];
  for (let i = 0; i < 3; i++) {
    const address = 'http://easteregg.wildcodeschool.fr/api/characters/random';
    fetch(address, option)
      .then(data => data.json())
      .then(data => heroesSelected.push(data))
      .then(data => {
        if (heroesSelected.length === 3) {
          res.status(200).json(heroesSelected);
        }
      });
  }
});

router.post('/saveHeroes', (req, res) => {
  const data = req.body;
  console.log(data)
  connection.query(`INSERT INTO account (pseudo, hero) VALUES ("${data.pseudo}", "${data.heroId}")`, (error, result) => {
    if (error) {
      console.log(error)
      res.json({ callback: false });
    } else {
      res.json({ callback: true });
    }
  })
});

router.post('/newEggs', (req, res) => {
  const pseudo = req.body.pseudo;
  connection.query(`SELECT eggs FROM account WHERE pseudo="${pseudo}"`, (err, res) => {
    var count = res[0].eggs;
    connection.query(`UPDATE account SET eggs="${count + 1}" WHERE pseudo="${pseudo}"`);
  });
});

router.post('/delEggs', (req, res) => {
  const pseudo = req.body.pseudo;
    connection.query(`UPDATE account SET eggs=${0} WHERE pseudo="${pseudo}"`);
});


// router.get('/test', (req, res) => {
//   connection.query('SELECT hero FROM account WHERE id=10', (error, result) => {
//     if(error){
//       console.log(error)
//     } else {
//       res.json({ res: result[0].hero })
//     }
//   })
// })

module.exports = router;