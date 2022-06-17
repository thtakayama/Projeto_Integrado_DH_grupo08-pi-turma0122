const path = require('path');
const bcrypt = require('bcrypt');
const { userInfo } = require('os');

module.exports = {
    
  login: (req, res) => {
    res.render('adm/login')
  },
  produtos: (req,res) => {
    res.render('adm/produtos')
  },
  produtosCadastrar: (req,res) => {
    res.render('adm/produtosCadastrar')
  }
}
