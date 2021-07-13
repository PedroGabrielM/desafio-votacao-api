const express = require('express');
const { response } = require('../app');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error}) }
        conn.query(
            'SELECT * FROM options;',
            (error, result, field) => {
                if (error) { return res.status(500).send({ error: error }) }
                const response = {
                    options: result.map(result => {
                        return {
                            id_options: result.id_options,
                            name: result.name,
                            quantity: result.quantity,
                            request: {
                                tipo: 'GET',
                                descricao: 'Return all options',
                                url:'http://localhost:3000/options/' + result.id_options
                            }
                        }
                    })
                }
                res.status(201).send(response);
            }
        )
    })
});

router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error}) }
        conn.query(
            'INSERT INTO options (name, quantity) VALUES (?, ?)',
            [req.body.name, req.body.quantity],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }
                const response = {
                    users: result.map(result => {
                        return {
                            id_options: result.id_options,
                            name: result.name,
                            quantity: result.quantity,
                            request: {
                                tipo: 'POST',
                                descricao: 'Insert options',
                                url:'http://localhost:3000/options/' + result.id_options
                            }
                        }
                    })
                }
                res.status(201).send(response);
            }
        )
    })
});

router.get('/id_options', (req, res) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error}) }
        conn.query(
            'SELECT * FROM options WHERE id_options = ?;',
            [req.params.id_options],
            (error, result, field) => {
                if (error) { return res.status(500).send({ error: error }) }
                const response = {
                    users: result.map(result => {
                        return {
                            id_options: result.id_options,
                            name: result.name,
                            request: {
                                tipo: 'GET',
                                descricao: 'Return options',
                                url:'http://localhost:3000/options/' + result.id_options
                            }
                        }
                    })
                }
                res.status(201).send(response);
            }
        )
    })
});

module.exports = router;