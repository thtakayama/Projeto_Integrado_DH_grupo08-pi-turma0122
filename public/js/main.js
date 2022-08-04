let btnComprar = document.getElementById('btn-comprar'); 
if(btnComprar) {
    btnComprar.addEventListener('click', function(){
        let produtoTitulo = document.getElementById('produto-titulo');
        let produtoPreco = document.getElementById('produto-preco');
        console.log(produtoTitulo, produtoPreco); 
        let produtosCarrinho = [];
        if(localStorage.getItem('produtosCarrinho') != null){
            produtosCarrinho = JSON.parse(localStorage.getItem('produtosCarrinho'));
        }
        produtosCarrinho.push({  
            titulo: produtoTitulo.innerText,
            preco: produtoPreco.innerText
        })
        localStorage.setItem('produtosCarrinho', JSON.stringify(produtosCarrinho));
        window.location = "/finalizar-compra/login";
    });
}

let produtosCarrinho = JSON.parse(localStorage.produtosCarrinho);
let tabelaProdutosCarrinho = document.getElementById("produtosCarrinho");
let todosPrecos = [];
var valorTotal = document.getElementById("valor-total");
let sum = 0;
if(tabelaProdutosCarrinho) {
    for(let i = 0; i < produtosCarrinho.length; i++){
        let linha = document.createElement('div');
        linha.classList.add('carrinho-item');
        let info = document.createElement('div');
        info.classList.add('carrinho-info');
        let formulario = document.createElement('form');
        let celulaTitulo = document.createElement('h5');
        let celulaPreco = document.createElement('h5');
        let celulaQuantidade = document.createElement('label');
        let campoQuantidade = document.createElement('input');
        celulaTitulo.innerText = produtosCarrinho[i].titulo;
        celulaQuantidade.innerText = "Quantidade:";
        campoQuantidade.defaultValue = 1;
        campoQuantidade.onchange = function() {
            campoQuantidade.setAttribute('value', this.value)
        }
        let quantidadeCalculada = Number(produtosCarrinho[i].preco.replace('R$', '').replace(',','.')) * campoQuantidade.getAttribute('value');
    
        todosPrecos.push(quantidadeCalculada);
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        sum = todosPrecos.reduce(reducer);
        celulaPreco.innerText = produtosCarrinho[i].preco;
        info.append(celulaTitulo, celulaPreco);
        formulario.append(celulaQuantidade, campoQuantidade);
        linha.append(info, formulario);
        tabelaProdutosCarrinho.append(linha);
    }
    valorTotal.innerText = "R$ " + sum.toFixed(2).replace('.', ',');
}


const campoCep = document.getElementById('cep');
if(campoCep) {
    campoCep.onblur = function() {
        let valorCep = this.value;
    
        const campoEndereco = document.getElementById('endereco');
        const campoBairro = document.getElementById('bairro');
        const campoCidade = document.getElementById('cidade');
        const campoEstado = document.getElementById('estado');
    
        campoEndereco.setAttribute('disabled', 'disabled');
        campoBairro.setAttribute('disabled', 'disabled');
        campoCidade.setAttribute('disabled', 'disabled');
        campoEstado.setAttribute('disabled', 'disabled');
    
        fetch("https://brasilapi.com.br/api/cep/v1/" + valorCep)
        .then(async function(resposta){
            let dados = await resposta.json();
            campoEndereco.value = dados.street;
            campoBairro.value = dados.neighborhood;
            campoCidade.value = dados.city;
            campoEstado.value = dados.state;
        })
    }
}