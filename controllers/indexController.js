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

  serieDetalhe: (req, res) => {
    db.Produto.findByPk(req.params.id, {
      include: [
        {association: 'autores'}
      ]
    })
      .then((serieDetalhe) => {
        return res.render('serie-detalhe', {serie: serieDetalhe})
      })
      .catch((error) => console.log(error));
  },

  finalizarCompra: (req, res) => {
    res.render('finalizacao-compra');
  },

  produtoInterno: (req, res) => {
    let emailUsuario = req.session.emailUsuario;
    res.render('produto-interno', { emailUsuario: emailUsuario });
  }
}
