const { validationResult } = require('express-validator');
const { sequelize, Cliente } = require('../database/models');
const bcrypt = require('bcrypt');

module.exports = {

  login: (req, res) => {
    res.render('login');
  },

  acaoLogin: async (req, res) => {
    let { email, senha } = req.body;

    console.log(req.body);

    const senhaValida = bcrypt.compareSync(senha, Cliente.senha);

    const cliente = await Cliente.findAll({
      where: {
        email: email,
        senha: senhaValida
      }
    })
    
    if(cliente == undefined){
      return res.render('login', { error: "Login/Senha inválidos" })
    }
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
      });

      if(emailCadastrado[0] != undefined) {
        return res.render("cadastro", { old: req.body, errors: {
          email: {msg: "E-mail já cadastrado"}
        }});
      }
  
      if (errors.isEmpty()) {
        let { nome, email, senha, cpf} = req.body;
        const hash = bcrypt.hashSync(senha, 10)
        let cliente = await Cliente.create(
          { nome, email, senha: hash, cpf}
        ).then(() => {
          res.render("painel-usuario", {cliente})
        }).catch(err => console.log(err))
        req.session.cliente = cliente;
      } else {
        res.render("cadastro", { errors: errors.mapped(), old: req.body });
      }
      
    },

  painel: async (req, res) => {
    // let cliente = await Cliente.findOne(
      
    // ).then(() => {
    //   res.render("painel-usuario", {cliente})
    // }).catch(err => console.log(err))
    // req.session.cliente = cliente;
  }

}

