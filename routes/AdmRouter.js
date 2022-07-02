var express = require('express');
var router = express.Router();
var AdmController = require('../controllers/AdmController');

//Middlewares
const upload = require('../middlewares/multerMiddleware');

router.get('/login', AdmController.login);
//Lista produtos
router.get('/produtos', AdmController.produtos);
//Criar/Cadastrar produto
router.get('/produtos/cadastrar', AdmController.produtosCadastrar);
router.post('/produtos/acaoCadastrar', upload.single('imagemProduto'), AdmController.acaoCadastrarProduto);
//Editar produto
router.get('/produtos/editar/:id', AdmController.produtoEditar);
router.post('/produtos/acaoEditar/:id', upload.single('imagemProduto'), AdmController.acaoEditarProduto);
//Excluir produto
router.post('/produtos/excluir/:id', AdmController.produtoExcluir);
//AUTORES
//Lista autores
router.get('/autores', AdmController.autores);
//Criar/Cadastrar autor
router.get('/autores/cadastrar', AdmController.autoresCadastrar);
router.post('/autores/acaoCadastrar', AdmController.acaoCadastrarAutor);
//Editar autor
router.get('/autores/editar/:id', AdmController.autorEditar);
router.post('/autores/acaoEditar/:id', AdmController.acaoEditarAutor);
//Excluir autor
router.post('/autores/excluir/:id', AdmController.autorExcluir);
//TIPOS
//Lista tipos
router.get('/tipos', AdmController.tipos);
//Criar/Cadastrar tipo
router.get('/tipos/cadastrar', AdmController.tipoCadastrar);
router.post('/tipos/acaoCadastrar', AdmController.acaoCadastrarTipo);
//Editar tipos
router.get('/tipos/editar/:id', AdmController.tipoEditar);
router.post('/tipos/acaoEditar/:id', AdmController.acaoEditarTipo);
//Excluir tipo
router.post('/tipos/excluir/:id', AdmController.excluirTipo);

module.exports = router;