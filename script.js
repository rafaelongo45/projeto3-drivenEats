let pratoSelecionado = 0;
let bebidaSelecionada = 0;
let sobremesaSelecionada = 0;

let nomePrato = null;
let valorPrato = null;
let pratoNumero = null;

let nomeBebida = null;
let valorBebida = null;
let bebidaNumero = null;

let nomeSobremesa = null;
let valorSobremesa = null;
let sobremesaNumero = null;
let valorTotal = null;

const botaoPronto = document.querySelector('.botao');
botaoPronto.disabled = true;

function selecionarPrato(itemEscolhido) {
    const escolher = document.querySelector('.pratos .item-selecionado');
    const temIcone = document.querySelector('.pratos .icone-selecionado');
    const vaiIcone = itemEscolhido.querySelector('.icone-nao-selecionado');

    const pratoNome = itemEscolhido.querySelector('.pratos .nome-do-prato');
    const pratoPreco = itemEscolhido.querySelector('.pratos .preco-do-prato');

    if (escolher !== null) {
        escolher.classList.remove('item-selecionado');
        nomePrato = null;
        valorPrato = null;
    }
    itemEscolhido.classList.add('item-selecionado')

    if (temIcone !== null) {
        temIcone.classList.remove('icone-selecionado')
    }

    vaiIcone.classList.add('icone-selecionado')

    nomePrato = pratoNome.innerHTML;
    valorPrato= pratoPreco.innerHTML;
    let pratoString = valorPrato.substring(3,valorPrato.length)
    pratoNumero = parseFloat(pratoString.replace(',', '.'))


    pratoSelecionado = 1;


    if (pratoSelecionado == 1 && bebidaSelecionada == 1 && sobremesaSelecionada == 1) {
        const botaoAtivo = document.querySelector('.botao');
        const novaMensagem = botaoAtivo.querySelector('.mensagem');

        botaoAtivo.classList.add('botao-liberado');
        novaMensagem.innerHTML = 'Fechar Pedido';
        botaoPronto.disabled = false;
        
    }
}

function selecionarBebida(itemEscolhido) {
    const escolher = document.querySelector('.bebidas .item-selecionado');
    const temIcone = document.querySelector('.bebidas .icone-selecionado');
    const vaiIcone = itemEscolhido.querySelector('.icone-nao-selecionado');

    const bebidaNome = itemEscolhido.querySelector('.bebidas .nome-do-prato');
    const bebidaPreco = itemEscolhido.querySelector('.bebidas .preco-do-prato');


    if (escolher !== null) {
        escolher.classList.remove('item-selecionado');
        nomeBebida = null;
        valorBebida = null;

    }

    itemEscolhido.classList.add('item-selecionado')

    if (temIcone !== null) {
        temIcone.classList.remove('icone-selecionado');
    }

    vaiIcone.classList.add('icone-selecionado');

    nomeBebida = bebidaNome.innerHTML;
    valorBebida= bebidaPreco.innerHTML;
    let bebidaString = valorBebida.substring(3,valorPrato.length)
    bebidaNumero = parseFloat(bebidaString.replace(',', '.'))

    bebidaSelecionada = 1;


    if (pratoSelecionado == 1 && bebidaSelecionada == 1 && sobremesaSelecionada == 1) {
        const botaoAtivo = document.querySelector('.botao');
        const novaMensagem = botaoAtivo.querySelector('.mensagem');

        botaoAtivo.classList.add('botao-liberado');
        novaMensagem.innerHTML = 'Fechar Pedido';
        botaoPronto.disabled = false;
    }
}

function selecionarSobremesa(itemEscolhido) {
    const escolher = document.querySelector('.sobremesas .item-selecionado');
    const temIcone = document.querySelector('.sobremesas .icone-selecionado');
    const vaiIcone = itemEscolhido.querySelector('.icone-nao-selecionado');

    const sobremesaNome = itemEscolhido.querySelector('.sobremesas .nome-do-prato');
    const sobremesaPreco = itemEscolhido.querySelector('.sobremesas .preco-do-prato');

    if (escolher !== null) {
        escolher.classList.remove('item-selecionado');
        nomeSobremesa = null;
        valorSobremesa = null
    }

    itemEscolhido.classList.add('item-selecionado');

    if (temIcone !== null) {
        temIcone.classList.remove('icone-selecionado');
    }

    vaiIcone.classList.add('icone-selecionado');

    nomeSobremesa = sobremesaNome.innerHTML;
    valorSobremesa= sobremesaPreco.innerHTML;
    let sobremesaString = valorSobremesa.substring(3,valorPrato.length)
    sobremesaNumero = parseFloat(sobremesaString.replace(',', '.'))

    sobremesaSelecionada = 1;


    if (pratoSelecionado == 1 && bebidaSelecionada == 1 && sobremesaSelecionada == 1) {
        const botaoAtivo = document.querySelector('.botao');
        const novaMensagem = botaoAtivo.querySelector('.mensagem');

        botaoAtivo.classList.add('botao-liberado');
        novaMensagem.innerHTML = 'Fechar Pedido';
        botaoPronto.disabled = false;
    }
}

function clicouBotao(){
    valorTotal = pratoNumero + bebidaNumero + sobremesaNumero;  
    valorTotal = valorTotal.toFixed(2);
    
    let uri  = "Olá, gostaria de fazer o pedido: \n- Prato: " + nomePrato + "\n- Bebida: " + nomeBebida + "\n- Sobremesa: " + nomeSobremesa + "\nTotal: R$ " + valorTotal;
    
    window.location = 'https://wa.me/5521999999999?text=' + encodeURIComponent(uri);
}
