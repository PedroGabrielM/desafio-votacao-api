const express = require('express');
const app = express();

const rotaUsers = require('./routes/users');
const rotaOptions = require('./routes/options');

app.use('/users', rotaUsers);
app.use('/options', rotaOptions);

app.use((req, res) => {
    return res.jsonres.status(200).send({
      message: 'App',
      message: 'Test'
  });
});

module.exports = app;