const usuarios = require('../database/usuarios.json');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

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
    const { nome, email, senha } = req.body;
    const senhaEnc = bcrypt.hashSync(senha, 10);

    const usuario = { nome, email, senha: senhaEnc };
    
    usuarios.push(usuario);

    fs.writeFileSync(path.join('database', 'Usuarios.json'), JSON.stringify(usuarios));

    res.redirect('login');
  }
}

module.exports = indexController;