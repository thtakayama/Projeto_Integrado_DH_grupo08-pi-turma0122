var express = require('express');
const { body, validationResult } = require('express-validator');
var router = express.Router();
var IndexController = require('../controllers/IndexController');

/* GET home page. */
router.get('/', IndexController.home);
router.get('/produtos', IndexController.produtos);
router.get('/livros', IndexController.livros);
router.get('/series', IndexController.series);
router.get('/ebooks', IndexController.ebooks);
router.get('/produtos/:id', IndexController.produtoDetalhe);
router.get('/finalizarCompra', IndexController.finalizarCompra);
router.get('/produtoInterno', IndexController.produtoInterno);

module.exports = router;