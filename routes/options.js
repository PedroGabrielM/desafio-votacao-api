const express = require('express');
const { response } = require('../app');
const router = express.Router();
const postgres = require('../postgres').pool;

router.get('/', (req, res) => {
    postgres.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error}) }
        conn.query(
            'SELECT * FROM options;',
            (error, result, field) => {
                if (error) { return res.status(500).send({ error: error}) }
                return res.status(200).send({ response: result })
            }
        )
    })
});

router.post('/', (req, res, next) => {
    postgres.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error}) }
        conn.query(
            'INSERT INTO options (quantity) VALUES (1)',
            [req.body.quantidade],
            (error, result, field) => {
                conn.release();

                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }

                return res.status(201).send({
                    message: 'Insert a otption',
                    id_option: result.insertId 
                });
            }
        )
    })
});

module.exports = router;