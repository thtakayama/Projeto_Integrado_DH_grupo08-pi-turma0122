const path = require('path');
const bcrypt = require('bcrypt');
const { userInfo } = require('os');
const { validationResult } = require('express-validator');
const { sequelize, Cliente} = require('../database/models');

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
    res.render('produto-interno', { emailUsuario:emailUsuario });
  },

  cadastrar: (req, res) => {
    res.render('cadastro')
  },

  acaoCadastrar: async (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()){
    let cpf = "";
    let { nome, email, senha } = req.body;
    const hash = bcrypt.hashSync(senha, 10);
    let novoCliente = await Cliente.create(
      { nome, email, senha: hash, cpf }
    )
    console.log(novoCliente);

    req.session.cliente = novoCliente;

    res.send('Cliente criado');
  
  }


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
