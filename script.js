const icon = document.getElementById('wat');

function selecionarItem(){
    document.getElementById('wtf').className += " item-selecionado";
    icon.classList.remove('icone-nao-selecionado');
    icon.classList.add('icone-selecionado');
}

