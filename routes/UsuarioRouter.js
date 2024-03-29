var express = require('express');
var router = express.Router();
var UsuarioController = require('../controllers/UsuarioController');

//Middlewares
const validacoes = require('../middlewares/validationsMiddleware');
const upload = require('../middlewares/multerMiddleware');
const clienteLogado = require('../middlewares/clienteLogado');
const clienteNaoLogado = require('../middlewares/clienteNaoLogado');

router.get('/login', clienteLogado, UsuarioController.login);
router.post('/login', clienteLogado, UsuarioController.acaoLogin);
router.get('/cadastro', clienteLogado, UsuarioController.cadastrar);
router.post('/cadastro', clienteLogado, validacoes , UsuarioController.acaoCadastrar);
router.get('/painel', clienteNaoLogado, UsuarioController.painel);
router.get('/endereco/editar/:id', UsuarioController.enderecoEditar);
router.post('/endereco/editar/:id', UsuarioController.acaoEditarEndereco);

module.exports = router;