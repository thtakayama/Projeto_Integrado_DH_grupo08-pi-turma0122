const path = require('path');
const bcrypt = require('bcrypt');
const { userInfo } = require('os');
const { validationResult } = require('express-validator');
const { sequelize, Cliente } = require('../database/models');
const db = require('../database/models');

module.exports = {

  home: async (req, res) => {
    let produtosRetornados = await db.Produto.findAll({
      where: {
        tipo_id: 3
      },
      order: [
        ['id', 'DESC']
      ],
      limit: 8
    });
    let seriesRetornadas = await db.Produto.findAll({
      where: {
        tipo_id: 2
      },
      order: [
        ['id', 'DESC']
      ],
      limit: 2
    });
    let destaqueRetornado = await db.Produto.findOne({
      where: {
        tipo_id: 2
      },
      order: [
        ['avaliacao', 'DESC']
      ]
    });
    return res.render('home', {produtos: produtosRetornados, series: seriesRetornadas, destaque: destaqueRetornado})
  },

  produtos: (req, res) => {
    res.render('produtos');
  },

  homeLancamentos: async (req, res) => {
    let produtosRetornados = await db.Produto.findAll({
      where: {
        tipo_id: 2
      },
      order: [
        ['id', 'DESC']
      ],
      limit: 8
    });
    return res.render('home', {produtos: produtosRetornados})
  },

  lancamentos: (req, res) => {
    db.Produto.findAll({
      order: [
        ['id', 'DESC']
      ],
      limit: 12
    })
      .then((produtosRetornados) => {
        return res.render('lancamentos', {produtos: produtosRetornados})
      })
      .catch((error) => console.log(error));
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

  produtoDetalhe: async (req, res) => {
    let produtoDetalhe = await db.Produto.findByPk(req.params.id, {
      include: [
        {association: 'autores'},
        {association: 'tipo'}
      ]
    });
    let ultimosLancamentos = await db.Produto.findAll({
      order: [
        ['id', 'DESC']
      ],
      limit: 4
    });
    return res.render('produto-detalhe', {produto: produtoDetalhe, lancamentos: ultimosLancamentos})
  },

  comprar: (req,res) => {
    res.render('finalizacao-compra-login');
  },

  finalizarCompra: (req, res) => {
    res.render('confirmacao-de-compra');
  },

  finalizarCompraLogin: (req, res) => {
    res.render('finalizacao-compra-login');
  },

  finalizarCompraEndereco: (req, res) => {
    res.render('finalizacao-compra-endereco');
  },

  finalizarCompraPagamento: async (req, res) => {
    let pagamentosRetornados = await db.Forma_Pagamento.findAll();
    res.render('finalizacao-compra-pagamento', {pagamentos: pagamentosRetornados});
  },

  produtoInterno: (req, res) => {
    let emailUsuario = req.session.emailUsuario;
    res.render('produto-interno', { emailUsuario: emailUsuario });
  }
}
