var express = require('express');
const { body, validationResult } = require('express-validator');
var router = express.Router();
var IndexController = require('../controllers/IndexController');

/* GET home page. */
router.get('/', IndexController.home);
router.get('/login', IndexController.login);
router.post('/acaoLogin', IndexController.acaoLogin);
router.get('/produtos', IndexController.produtos);
router.get('/series', IndexController.series);
router.get('/series/:id', IndexController.serieDetalhe);
router.get('/finalizarCompra', IndexController.finalizarCompra);
router.get('/produtoInterno', IndexController.produtoInterno);

module.exports = router;