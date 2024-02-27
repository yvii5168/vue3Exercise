const mysql = require('mysql');

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'kang052905',
  database: 'vue3_quick_study'
});

module.exports = db;