const mysql = require('mysql');
const { Pool } = require('mysql')

const pool = mysql.createPool({
    "user": "root",
    "password": "root",
    "host": "localhost",
    "port": "3306",
    "database": "votacao_desafio"
});

exports.pool = pool;