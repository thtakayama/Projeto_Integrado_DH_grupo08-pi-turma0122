var express = require('express');
var router = express.Router();
var AdmController = require('../controllers/AdmController');

//Middlewares
const upload = require('../middlewares/multerMiddleware');

router.get('/login', AdmController.login);
router.get('/produtos', AdmController.produtos);
//Criar/Cadastrar produto
router.get('/produtos/cadastrar', AdmController.produtosCadastrar);
router.post('/produtos/acaoCadastrar', upload.single('imagemProduto'), AdmController.acaoCadastrarProduto);
router.get('/produtos/excluir/:idProduto', AdmController.produtosExcluir);
router.get('/autores', AdmController.autores);
router.get('/autores/cadastrar', AdmController.autoresCadastrar);
router.post('/autores/acaoCadastrar', AdmController.acaoCadastrarAutor);
router.get('/autores/excluir/:idAutor', AdmController.autoresExcluir);

module.exports = router;