const express = require('express');
const router = express.Router();
const postgres = require('../postgres').pool;

router.get('/', (req, res, next) => {
    postgres.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'SELECT * FROM users;',
            (error, result, field) => {
                if (error) { return res.status(500).send({ error: error }) }
                return res.status(200).send({response: result})
            }
        )
    })
});

module.exports = router;