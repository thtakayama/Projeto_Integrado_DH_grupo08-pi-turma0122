const { validationResult } = require('express-validator');
const { sequelize, Cliente } = require('../database/models');
const bcrypt = require('bcrypt');

module.exports = {

  login: (req, res) => {
    res.render('login');
  },

  painel: (req, res) => {
    res.render('painel-usuario');
  },

  cadastrar: (req, res) => {
    res.render('cadastro')
  },

  acaoCadastrar: async (req, res) => {
    const resultadosValidacoes = validationResult(req);

    if (resultadosValidacoes.errors.length > 0) {
      return res.render('cadastro', {
        errors: resultadosValidacoes.mapped(),
        oldData: req.body
      })
    } else {
      let cpf = "";
      let { nome, email, senha } = req.body;
      const hash = bcrypt.hashSync(senha, 10);
      let novoCliente = await Cliente.create(
        { nome, email, senha: hash, cpf }
      )
      res.redirect('painel-usuario');
    }
  },

}

