const path = require('path');
const bcrypt = require('bcrypt');
const { userInfo } = require('os');
let db = require('../database/models');

let produtos = [];
let autores = [];
 
module.exports = {
    
  login: (req, res) => {
    res.render('adm/login')
  },

  produtos: (req,res) => {
    db.Produto.findAll({
      include: [
        {association: 'autores'},
        {association: 'tipo'}
      ]
    })
    .then(function(produtosRetornados) {
      return res.render('adm/produtos', { produtos: produtosRetornados })
    })
    .catch((erro) => console.log(erro))
  },

  produtosCadastrar: async (req,res) => {
    let autoresRetornados = await db.Autor.findAll();
    let tipoRetornados = await db.Tipo.findAll();
    let generosRetornados = await db.Genero.findAll();
    res.render('adm/produtosCadastrar', { autores: autoresRetornados, tipo: tipoRetornados, generos: generosRetornados })
  },

  acaoCadastrarProduto: (req,res) => {

    db.Produto.create({
      titulo: req.body.titulo, 
      autores_id: req.body.autor,
      img: req.file.filename,
      preco: req.body.preco,
      descricao: req.body.descricao,
      avaliacao: req.body.avaliacao,
      tipo_id: req.body.tipo,
      generos_id: req.body.generos
    }).then((produtoRetornado) => {
      produtos.push(produtoRetornado);

      res.redirect('/adm/produtos');
    })
      .catch((error) => console.log(error));
  },

  produtosExcluir: (req,res) => {
    produtos = produtos.filter((produto) => produto.id != req.params.idProduto);
    res.redirect('/adm/produtos');
  },

  autores: (req,res) => {
    db.Autor.findAll()
    .then(function(autoresRetornados){
      return res.render('adm/autores', { autores: autoresRetornados } )
    })
  },

  autoresCadastrar: (req,res) => {
    res.render('adm/autoresCadastrar')
  },

  acaoCadastrarAutor: (req,res) => {
    db.Autor.create({
      nome: req.body.nome,
      biografia: req.body.biografia
    }).then(() => {
      res.redirect('/adm/autores');
    })
      .catch((error) => console.log(error));
  }, 
  
  autoresExcluir: (req,res) => {
    autores = autores.filter((autor) => autor.id != req.params.idAutor);
    res.redirect('/adm/autores');
  }
}
