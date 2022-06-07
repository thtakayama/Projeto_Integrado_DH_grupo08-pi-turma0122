var express = require('express');
var router = express.Router();
var IndexController = require('../controllers/IndexController');

/* GET home page. */
router.get('/', IndexController.home);
router.get('/login', IndexController.login);
router.get('/lista', IndexController.lista);
router.get('/finalizarCompra', IndexController.finalizarCompra);
router.get('/produtoInterno', IndexController.produtoInterno);
router.get('/cadastro', IndexController.cadastrar);
router.post('/cadastro', IndexController.acaoCadastrar);
router.get('/painel-usuario', IndexController.painelUsuario);
router.get('/painel-usuario-enderecos', IndexController.painelUsuarioEnderecos);
router.get('/painel-usuario-pedidos', IndexController.painelUsuarioPedidos);

module.exports = router;
