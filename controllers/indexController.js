const path = require('path');
const bcrypt = require('bcrypt');
const { userInfo } = require('os');
const { validationResult } = require('express-validator');
const { sequelize, Cliente } = require('../database/models');
const db = require('../database/models');

module.exports = {

  home: (req, res) => {
    res.render('home');
  },

  produtos: (req, res) => {
    res.render('produtos');
  },

  livros: (req, res) => {
    db.Produto.findAll({
      where: {
        tipo_id: 1
      }
    })
      .then((produtosRetornados) => {
        return res.render('livros', {produtos: produtosRetornados})
      })
      .catch((error) => console.log(error));
  },

  ebooks: (req, res) => {
    db.Produto.findAll({
      where: {
        tipo_id: 3
      }
    })
      .then((produtosRetornados) => {
        return res.render('ebooks', {produtos: produtosRetornados})
      })
      .catch((error) => console.log(error));
  },

  series: (req, res) => {
    db.Produto.findAll({
      where: {
        tipo_id: 2
      }
    })
      .then((produtosRetornados) => {
        return res.render('series', {produtos: produtosRetornados})
      })
      .catch((error) => console.log(error));
  },

  produtoDetalhe: (req, res) => {
    db.Produto.findByPk(req.params.id, {
      include: [
        {association: 'autores'}
      ]
    })
      .then((produtoDetalhe) => {
        return res.render('produto-detalhe', {produto: produtoDetalhe})
      })
      .catch((error) => console.log(error));
  },

  acaoComprar: (req,res) => {
    db.Produto.findByPk(req.params.id)
      .then((produtoRetornado) => {
        return res.render('partials/carrinho', {produto: produtoRetornado})
    })
    .cath((error) => console.log(error));
  },

  finalizarCompra: (req, res) => {
    res.render('finalizacao-compra');
  },

  produtoInterno: (req, res) => {
    let emailUsuario = req.session.emailUsuario;
    res.render('produto-interno', { emailUsuario: emailUsuario });
  }
}
