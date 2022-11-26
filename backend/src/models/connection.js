const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: process.env.MYSLQ_HOST,
	user: process.env.MYSLQ_USER,
	password: process.env.MYSLQ_PASSWORD,
	database: process.env.MYSLQ_DB
});

module.exports = connection;