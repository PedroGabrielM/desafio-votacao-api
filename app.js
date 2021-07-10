const express = require('express');
const app = express();
const morgan = require('morgan');

const rotaUsers = require('./routes/users');
const rotaVotes = require('./routes/votes');

app.use(morgan('dev'));
app.use('/users', rotaUsers);
app.use('/votes', rotaVotes);

app.use((req, res, next) => {
    return res.status(200).send({
        message: 'ok'
    });
});

module.exports = app;