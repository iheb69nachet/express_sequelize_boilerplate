// lib/db.js

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'iheb',
  database: 'bet',
  password: 'root'
});

connection.connect();
module.exports = connection;