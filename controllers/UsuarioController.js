const { validationResult } = require('express-validator');

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
    
      acaoCadastrar: (req, res) => {
        const resultadosValidacoes = validationResult(req);

        if(resultadosValidacoes.errors.length > 0) {
          return res.render('cadastro', {
            errors: resultadosValidacoes.mapped(),
            oldData: req.body
          })
        }

        return res.render('painel-usuario');
    },
    
}

