const path = require('path');
const bcrypt = require('bcrypt');
const { userInfo } = require('os');
let db = require('../database/models');
 
module.exports = {
    
  login: (req, res) => {
    res.render('adm/login')
  },

  acaoLoginAdm: async (req, res) => {
    const { email, senha } = req.body;

    const admEncontrado = await db.Usuario.findOne({
      where: {
        email: email,
        senha: senha
      }
    });
    if(admEncontrado == null){
      res.render('adm/login', { error: ["Usuário ou senha inválidos"]});
      return;
    } 
    // if(!bcrypt.compareSync(senha, admEncontrado.senha)){
    //   res.render('adm/login', { error: ["Usuário ou senha inválidos"]});
    //   return;
    // } 

    req.session.usuario = admEncontrado;

    res.redirect("adm/produtos");
  },

  produtos: (req,res) => {
    db.Produto.findAll({
      include: [
        {association: 'autores'},
        {association: 'tipo'},
        {association: 'generos'}
      ]
    })
    .then(function(produtosRetornados) {
      console.log(produtosRetornados);
      return res.render('adm/produtos', { produtos: produtosRetornados });
    })
    .catch((erro) => console.log(erro))
  },

  produtosCadastrar: async (req,res) => {
    let autoresRetornados = await db.Autor.findAll();
    let tipoRetornados = await db.Tipo.findAll();
    let generosRetornados = await db.Genero.findAll();
    res.render('adm/produtosCadastrar', { autores: autoresRetornados, tipo: tipoRetornados, generos: generosRetornados })
  },

  acaoCadastrarProduto: (req,res) => {
    db.Produto.create({
      titulo: req.body.titulo,
      autores_id: req.body.autor,
      img: req.file.filename,
      preco: req.body.preco,
      descricao: req.body.descricao,
      avaliacao: req.body.avaliacao,
      tipo_id: req.body.tipo,
      generos: req.body.generos
    })
    .then((retornaProduto) => {
      retornaProduto.addGenero(generos);
    })
    .then(() => {
      res.redirect('/adm/produtos');
    })
      .catch((error) => console.log(error));
  },

  produtoEditar: async (req,res) => {
    let produtoId = req.params.id;
    let autoresRetornados = await db.Autor.findAll();
    let tipoRetornado = await db.Tipo.findAll();
    let generosRetornados = await db.Genero.findAll();
    let produtoRetornado = await db.Produto.findByPk(produtoId);

    res.render('adm/produtoEditar', {
      produto: produtoRetornado, 
      autores: autoresRetornados,
      tipo: tipoRetornado,
      generos: generosRetornados
    })
  },

  acaoEditarProduto: (req,res) => {
    db.Produto.update({
      titulo: req.body.titulo, 
      autores_id: req.body.autor,
      preco: req.body.preco,
      descricao: req.body.descricao,
      avaliacao: req.body.avaliacao,
      tipo_id: req.body.tipo,
      generos_id: req.body.generos
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(() => {
      res.redirect('/adm/produtos');
    })
    .catch((error) => console.log(error))
  },

  produtoExcluir: (req,res) => {
    db.Produto.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    )
    .then(() => {
      res.redirect('/adm/produtos');
    })
    .catch((error) => console.log(error))
  },

  autores: (req,res) => {
    db.Autor.findAll()
    .then(function(autoresRetornados){
      return res.render('adm/autores', { autores: autoresRetornados } )
    })
  },

  autoresCadastrar: (req,res) => {
    res.render('adm/autoresCadastrar')
  },

  acaoCadastrarAutor: (req,res) => {
    db.Autor.create({
      nome: req.body.nome,
      biografia: req.body.biografia
    }).then(() => res.redirect('/adm/autores'))
      .catch((error) => console.log(error));
  }, 
  
  autorEditar: async (req,res) => {
    let autorId = req.params.id;
    let autoresRetornados = await db.Autor.findByPk(autorId);

    res.render('adm/autorEditar', { 
      autor: autoresRetornados
    })
  },

  acaoEditarAutor: (req,res) => {
    db.Autor.update({
      nome: req.body.nome,
      biografia: req.body.biografia
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(() => {
      res.redirect('/adm/autores');
    })
    .catch((error) => console.log(error))
  },

  autorExcluir: (req,res) => {
    db.Autor.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    )
    .then(() => {
      res.redirect('/adm/autores');
    })
    .catch((error) => console.log(error))
  },

  tipos: (req,res) => {
    db.Tipo.findAll()
      .then((tiposRetornados) => {
        return res.render('adm/tipos', {tipos: tiposRetornados})
      })
  },

  tipoCadastrar: (req,res) => {
    res.render('adm/tipoCadastrar');
  },

  acaoCadastrarTipo: (req,res) => {
    db.Tipo.create({
      nome: req.body.nome
    }).then(() => {
      res.redirect('/adm/tipos');
    }).catch((error) => console.log(error));
  },

  tipoEditar: async (req,res) => {
    let tipoId = req.params.id;
    let tipoRetornado = await db.Tipo.findByPk(tipoId);

    res.render('adm/tipoEditar', {tipo: tipoRetornado});
  },

  acaoEditarTipo: (req,res) => {
    db.Tipo.update({
      nome: req.body.nome
    }, {
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.redirect('/adm/tipos')
    }).catch((erro) => console.log(erro));
  },

  excluirTipo: (req,res) => {
    db.Tipo.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.redirect('/adm/tipos')
    }).catch((erro) => console.log(erro));
  },

  categorias: (req,res) => {
    db.Genero.findAll()
      .then((generosRetornados) => {
        res.render('adm/categorias', {generos: generosRetornados});
      }).catch((erro) => console.log(erro));
  },

  categoriaCadastrar: (req,res) => {
    res.render('adm/categoriaCadastrar');
  },

  acaoCategoriaCadastrar: (req,res) => {
    db.Genero.create({
      nome: req.body.nome
    }).then(() => {
      res.redirect('/adm/categorias');
    }).catch((erro) => console.log(erro))
  },

  categoriaEditar: async (req,res) => {
    let categoriaId = req.params.id;
    let categoriaRetornado = await db.Genero.findByPk(categoriaId);

    res.render('adm/categoriaEditar', { genero: categoriaRetornado });
  },

  acaoCategoriaEditar: (req,res) => {
    db.Genero.update({
      nome: req.body.nome,
    }, {
      where: { 
        id: req.params.id
      }
    }).then(() => {
      res.redirect('/adm/categorias')
    }).catch((erro) => console.log(erro));
  },

  categoriaExcluir: (req,res) => {
    db.Genero.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.redirect('/adm/categorias')
    }).catch((erro) => console.log(erro));
  }
}
