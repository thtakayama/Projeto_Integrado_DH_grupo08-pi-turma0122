const indexController = {

  home: (req, res) => {
    return res.render('home');
  },
  login: (req, res) => {
    return res.render('login');
  },
  lista: (req, res) => {
    return res.render('lista');
  },
  finalizarCompra: (req, res) => {
    return res.render('finalização-compra');
  },
  produtoInterno: (req, res) => {
    return res.render('produto-interno');
  }
}

module.exports = indexController;