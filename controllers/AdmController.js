const path = require('path');
const bcrypt = require('bcrypt');
const { userInfo } = require('os');

let produtos = [];

module.exports = {
    
  login: (req, res) => {
    res.render('adm/login')
  },
  produtos: (req,res) => {
    res.render('adm/produtos', {
      produtos: produtos
    });
  },
  produtosCadastrar: (req,res) => {
    res.render('adm/produtosCadastrar')
  },
  acaoCadastrarProduto: (req,res) => {
    const titulo = req.body.titulo; 
    const autor = req.body.autor; 
    const imagem = req.file.filename;
    const preco = req.body.preco; 
    const descricao = req.body.descricao; 
    const avaliacao = req.body.avaliacao; 

    const objProduto = {
      titulo: titulo,
      autor: autor,
      imagem: imagem,
      preco: preco,
      descricao: descricao,
      avaliacao: avaliacao
    }
    produtos.push(objProduto);

    res.redirect('/adm/produtos');
  }, 
  produtosExcluir: (req,res) => {
    produtos = produtos.filter((produto) => produto.id != req.params.idProduto);
    res.redirect('/adm/produtos');
  }
}
