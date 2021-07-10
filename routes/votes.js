const express = require('express');
const router = express.Router();

//Retorna todos os votos
router.get('/', (req, res) => {
    return res.json({
        message: 'ok'
    });
});

//Insere um voto
router.post('/', (req, res) => {
    return res.json({
        message: 'ok'
    });
});

//Retorna dados do voto
router.get('/:id_votes', (req, res) => {

   const id = req.params.id_votes
   
   if (id === 'especial'){
      return res.json([
        { name: 'voting'},
        { name: 'options'}
    ]);
   } else{
        return res.json([
        { name: 'voting'},
        { name: 'options'}
    ]);
   }
});

module.exports = router;