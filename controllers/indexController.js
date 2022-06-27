const path = require('path');
const bcrypt = require('bcrypt');
const { userInfo } = require('os');
const { validationResult } = require('express-validator');
const { sequelize, Cliente } = require('../database/models');

module.exports = {

  home: (req, res) => {
    res.render('home');
  },

  login: (req, res) => {
    res.render('login');
  },

  acaoLogin: (req, res) => {
    req.session.emailUsuario = "editora@sabia.com.br",
      req.session.idUsuario = "1"

    res.redirect('produto-interno')
  },

  produtos: (req, res) => {
    res.render('produtos');
  },

  finalizarCompra: (req, res) => {
    res.render('finalizacao-compra');
  },

  produtoInterno: (req, res) => {
    let emailUsuario = req.session.emailUsuario;
    res.render('produto-interno', { emailUsuario: emailUsuario });
  },

  painelUsuario: (req, res) => {
    res.render('painel-usuario');
  },

  painelUsuarioEnderecos: (req, res) => {
    res.render('painel-usuario-enderecos');
  },

  painelUsuarioPedidos: (req, res) => {
    res.render('painel-usuario-pedidos');
  }
}
