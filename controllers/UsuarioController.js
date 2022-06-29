const { validationResult } = require('express-validator');
const { sequelize, Cliente } = require('../database/models');
const bcrypt = require('bcrypt');

module.exports = {

  login: (req, res) => {
    res.render('login');
  },

  acaoLogin: (req, res) => {
    req.session.emailUsuario = "editora@sabia.com.br",
      req.session.idUsuario = "1"

    res.redirect('produto-interno')
  },

  cadastrar: (req, res) => {
    res.render('cadastro')
  },

  acaoCadastrar: async (req, res) => {

      let errors = validationResult(req)
      let emailCadastrado = await Cliente.findAll({
        where: {
          email: req.body.email
        }
      })

      if(emailCadastrado[0] != undefined) {
        return res.render("cadastro", { old: req.body, errors: {email: {msg: "E-mail já cadastrado"}}});
      }
  
      if (errors.isEmpty()) {
  
        let { nome, email, senha, cpf} = req.body;
        const hash = bcrypt.hashSync(senha, 10)
        let novoUsuario = await Cliente.create(
          { nome, email, senha: hash, cpf}
        ).catch(err => console.log(err))
  
        res.render("painel-usuario");
      } else {
        res.render("cadastro", { errors: errors.mapped(), old: req.body });
      }
    },

  painel: (req, res) => {
    res.render('painel-usuario');
  }

}

