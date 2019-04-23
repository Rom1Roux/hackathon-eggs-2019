const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'escape_eggs',
  port:'8889'
});

module.exports = connection;