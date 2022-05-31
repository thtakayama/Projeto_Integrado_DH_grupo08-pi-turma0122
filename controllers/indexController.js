// const usuarios = require('../database/usuarios.json');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { userInfo } = require('os');

const indexController = {

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

    // const { nome, email, senha } = req.body;
    // const senhaEnc = bcrypt.hashSync(senha, 10);
    // let id = usuarios[usuarios.length -1].id +1;
    // const usuario = { id, nome, email, senha: senhaEnc };
    // usuarios.push(usuario);
    // fs.writeFileSync(path.join('database', 'Usuarios.json'), JSON.stringify(usuarios));
    // res.redirect('login');

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

module.exports = indexController;