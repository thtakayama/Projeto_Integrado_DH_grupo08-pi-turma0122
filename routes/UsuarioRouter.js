var express = require('express');
var router = express.Router();
var UsuarioController = require('../controllers/UsuarioController');

router.get('/login', UsuarioController.login);
router.get('/cadastro', UsuarioController.cadastrar);
router.post('/cadastro', UsuarioController.acaoCadastrar);

module.exports = router;