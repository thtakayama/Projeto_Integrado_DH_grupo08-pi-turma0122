const path = require('path');
const bcrypt = require('bcrypt');
const { userInfo } = require('os');

module.exports = {

  home: (req, res) => {
    res.render('home');
  },

  login: (req, res) => {
    res.render('login');
  },

  lista: (req, res) => {
    res.render('lista');
  },

  finalizarCompra: (req, res) => {
    res.render('finalizacao-compra');
  },

  produtoInterno: (req, res) => {
    res.render('produto-interno');
  },

  cadastrar: (req, res) => {
    res.render('cadastro')
  },

  acaoCadastrar: (req, res) => {


  },

  painelUsuario: (req, res) => {
    res.render('painel-usuario');
  },

  painelUsuarioPessoais: (req, res) => {
    res.render('painel-usuario-pessoais');
  },

  painelUsuarioEnderecos: (req, res) => {
    res.render('painel-usuario-enderecos');
  },

  painelUsuarioConfiguracoes: (req, res) => {
    res.render('painel-usuario-configuracoes');
  },

  painelUsuarioPedidos: (req, res) => {
    res.render('painel-usuario-pedidos');
  }
}
