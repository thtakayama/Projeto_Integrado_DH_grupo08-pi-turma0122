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
  }
}

module.exports = indexController;