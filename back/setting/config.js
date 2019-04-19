const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'request',
  password: 'request',
  database: 'escape_eggs'
});

module.exports = connection;