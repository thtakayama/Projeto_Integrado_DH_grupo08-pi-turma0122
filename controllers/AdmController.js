const path = require('path');
const bcrypt = require('bcrypt');
const { userInfo } = require('os');
let db = require('../database/models');

let produtos = [];
//let autores = [];
 
module.exports = {
    
  login: (req, res) => {
    res.render('adm/login')
  },

  produtos: (req,res) => {
    db.Produto.findAll()
    .then(function(produtosRetornados) {
      return res.render('adm/produtos', { produtos: produtosRetornados })
    })
    .catch((erro) => console.log(erro))
  },

  produtosCadastrar: (req,res) => {
    db.Autor.findAll()
      .then(function(autoresRetornados) {
        res.render('adm/produtosCadastrar', { autores: autoresRetornados })
      })
      .catch((erro) => console.log(erro))
  },

  acaoCadastrarProduto: (req,res) => {

    db.Produto.create({
      titulo: req.body.titulo, 
      autores_id: req.body.autor,
      img: req.file.filename,
      preco: req.body.preco,
      descricao: req.body.descricao,
      avaliacao: req.body.avaliacao
    }).then((produtoRetornado) => {
      produtos.push(produtoRetornado);

      res.redirect('/');
    })
      .catch((error) => console.log(error));

    /* const titulo = req.body.titulo; 
    const autor = req.body.autor; 
    const imagem = req.file.filename;
    const preco = req.body.preco; 
    const descricao = req.body.descricao; 
    const avaliacao = req.body.avaliacao; 

    const objProduto = {
      titulo: titulo,
      autor: autor,
      imagem: imagem,
      preco: preco,
      descricao: descricao,
      avaliacao: avaliacao
    }
    produtos.push(objProduto);

    res.redirect('/adm/produtos'); */
  },

  produtosExcluir: (req,res) => {
    produtos = produtos.filter((produto) => produto.id != req.params.idProduto);
    res.redirect('/adm/produtos');
  },

  autores: (req,res) => {
    res.render('adm/autores', {
      autores: autores
    });
  },

  autoresCadastrar: (req,res) => {
    res.render('adm/autoresCadastrar')
  },

  acaoCadastrarAutor: (req,res) => {
    db.Autor.create({
      nome: req.body.nome,
      biografia: req.body.biografia
    }).then(() => res.redirect('adm/autores'))
      .catch((error) => console.log(error));
  }, 
  
  autoresExcluir: (req,res) => {
    autores = autores.filter((autor) => autor.id != req.params.idAutor);
    res.redirect('/adm/autores');
  }
}
