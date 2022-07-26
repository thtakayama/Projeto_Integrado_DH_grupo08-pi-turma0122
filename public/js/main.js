const campoCep = document.getElementById('cep');
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