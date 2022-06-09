module.exports = {

    login: (req, res) => {
        res.render('login');
      },

      cadastrar: (req, res) => {
        res.render('cadastro')
      },
    
      acaoCadastrar: async (req, res) => {
        let errors = validationResult(req);
    
        if (errors.isEmpty()){
        
        let cpf = "";
        let { nome, email, senha } = req.body;
        const hash = bcrypt.hashSync(senha, 10);
        let novoCliente = await Cliente.create(
          { nome, email, senha: hash, cpf }
        )
        console.log(novoCliente);
    
        req.session.cliente = novoCliente;
    
        res.send('Cliente criado');
      
      }
    },
    
}