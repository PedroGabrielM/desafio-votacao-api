const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'SELECT * FROM users;',
            (error, result, field) => {
                if (error) { return res.status(500).send({ error: error }) }
                const response = {
                    users: result.map(result => {
                        return {
                            id_user: result.id_user,
                            name: result.name,
                            aut: result.aut,
                            options_id_options: result.options_id_options,
                            request: {
                                tipo: 'GET',
                                descricao: 'Return all users',
                                url:'http://localhost:3000/users/' + result.id_user
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
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'INSERT INTO users (name) VALUES (?)',
            [req.body.name],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }
                const response = {
                    mensagen: 'User insert success',
                    usersCreated:{
                        request: {
                            tipo: 'POST',
                            descricao: 'Insert a user',
                            url:'http://localhost:3000/users/' + result.id_user
                        }
                    }            
                }
                res.status(201).send(response);
            }
        )
    });
});

module.exports = router;