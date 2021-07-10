const express = require('express');
const router = express.Router();

//Retorna todos os usuários
router.get('/', (req, res) => {
    return res.json({
        message: 'ok'
    });
});

//Insere um usuário
router.post('/', (req, res) => {
    return res.json({
        message: 'ok'
    });
});

//Retorna dados do usuario
router.get('/:id_users', (req, res, next) => {
   const id = req.params.id_users
   
   return res.json({
    message: 'ok'
});
});

module.exports = router;