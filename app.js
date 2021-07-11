const express = require('express');
const app = express();

const rotaUsers = require('./routes/users');
const rotaOptions = require('./routes/options');

app.use('/users', rotaUsers);
app.use('/options', rotaOptions);

app.use((req, res) => {
    return res.status(200).send({
        message: 'ok'
    });
});

module.exports = app;