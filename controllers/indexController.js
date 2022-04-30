module.exports = {

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
    res.render('finalização-compra');
  }
}

