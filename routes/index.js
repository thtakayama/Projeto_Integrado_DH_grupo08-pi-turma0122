var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.home);
router.get('/login', indexController.login);
router.get('/lista', indexController.lista);
router.get('/finalizar_compra', indexController.finalizarCompra);

module.exports = router;
