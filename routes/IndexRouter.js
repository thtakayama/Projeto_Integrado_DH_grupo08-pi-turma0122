var express = require('express');
const { check } = require('express-validator');
var router = express.Router();
var IndexController = require('../controllers/IndexController');

const validacoesEndereco = [
    check('cep').notEmpty(),
    check('numero').notEmpty()
]


/* GET home page. */
router.get('/', IndexController.home);
router.get('/produtos', IndexController.produtos);
router.get('/lancamentos', IndexController.lancamentos);
router.get('/livros', IndexController.livros);
router.get('/ebooks', IndexController.ebooks);
router.get('/series', IndexController.series);
router.get('/produtos/:id', IndexController.produtoDetalhe);
router.post('/carrinho/acaoComprar', IndexController.acaoComprar);
router.get('/finalizarCompra', IndexController.finalizarCompra);
router.get('/finalizar-compra/login', IndexController.finalizarCompraLogin);
router.get('/finalizar-compra/endereco', validacoesEndereco, IndexController.finalizarCompraEndereco);
router.get('/finalizar-compra/pagamento', IndexController.finalizarCompraPagamento);
router.get('/produtoInterno', IndexController.produtoInterno);

module.exports = router;