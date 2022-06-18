var express = require('express');
var router = express.Router();
var AdmController = require('../controllers/AdmController');

router.get('/login', AdmController.login);
router.get('/produtos', AdmController.produtos);
router.get('/cadastrar-produtos', AdmController.produtosCadastrar);
router.post('/acao-cadastrar-produtos', AdmController.acaoCadastrarProduto);

module.exports = router;