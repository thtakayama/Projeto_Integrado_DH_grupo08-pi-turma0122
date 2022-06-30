var express = require('express');
var router = express.Router();
var UsuarioController = require('../controllers/UsuarioController');

//Middlewares
const validacoes = require('../middlewares/validationsMiddleware');
const upload = require('../middlewares/multerMiddleware');

router.get('/login', UsuarioController.login);
router.post('/acaoLogin', UsuarioController.acaoLogin);
router.get('/cadastro', UsuarioController.cadastrar);
router.post('/cadastro', validacoes , UsuarioController.acaoCadastrar);
router.get('/painel', UsuarioController.painel);


module.exports = router;