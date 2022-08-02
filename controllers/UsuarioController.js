const { validationResult } = require('express-validator');
const { sequelize, Cliente } = require('../database/models');
const bcrypt = require('bcrypt');

module.exports = {

  login: (req, res) => {
    res.render('login');
  },

  acaoLogin: async (req, res) => {
    const { email, senha } = req.body;

    const clienteEncontrado = await Cliente.findOne({
      where: {email: email}
    });
    if(clienteEncontrado == null){
      res.render('login', { error: ["Usuário ou senha inválidos"]});
      return;
    } 
    if(!bcrypt.compareSync(senha, clienteEncontrado.senha)){
      res.render('login', { error: ["Usuário ou senha inválidos"]});
      return;
    } 

    req.session.cliente = clienteEncontrado;

    res.redirect("/");
  },

  cadastrar: (req, res) => {
    res.render('cadastro')
  },

  acaoCadastrar: async (req, res) => {

      let errors = validationResult(req)
  
      if (errors.isEmpty()) {
        let { nome, email, senha, cpf} = req.body;
        const hash = bcrypt.hashSync(senha, 10)
        let cliente = await Cliente.create(
          { nome, email, senha: hash, cpf}
        );

          res.render("painel-usuario", {cliente});

      } else {
        res.render("cadastro", { errors: errors.mapped(), old: req.body });
      }
      
    },

  painel: async (req, res) => {
      let cliente = await Cliente.findAll();
      console.log(cliente)

      res.render("painel-usuario", {cliente})
  },

  enderecoEditar: (req, res) => {

  },

  acaoEditarEndereco: (req, res) => {

  }

}

