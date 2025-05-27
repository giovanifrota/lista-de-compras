let listaDeItens = [];

const form = document.getElementById('form-itens');
const itenInput = document.getElementById('receber-item');

form.addEventListener('submit', function(evento){
    evento.preventDefault();
    salvarItem();
})

function salvarItem(){
    const compraItem = itenInput.value;
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === compraItem.toUpperCase());

    if(checarDuplicado){
        alert("Item já existe!")
    }else{
    listaDeItens.push( {
        valor: compraItem,
    })
}
    console.log(listaDeItens);
}