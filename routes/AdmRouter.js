var express = require('express');
var router = express.Router();
var AdmController = require('../controllers/AdmController');

router.get('/login', AdmController.login);
router.get('/produtos', AdmController.produtos);
router.get('/produtos/cadastrar', AdmController.produtosCadastrar);

module.exports = router;