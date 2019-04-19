const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'wilder',
  password: '6144',
  database: 'escape_eggs'
});

module.exports = connection;