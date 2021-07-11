const postgres = require('pg');
const { Pool } = require('pg')

const pool = new Pool({
    "user": "postgres",
    "password": "123",
    "host": "127.0.0.1",
    "port": "5433",
    "database": "votacao_desafio"
});

exports.pool = pool;