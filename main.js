let listaDeItens = [];

const form = document.getElementById("form-itens");
const itenInput = document.getElementById("receber-item");
const ulItems = document.getElementById("lista-de-itens");
const ulItensComprados = document.getElementById('itens-comprados');

form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  salvarItem();
  mostrarItem();
  itenInput.focus();
});

function salvarItem() {
  const compraItem = itenInput.value;
  const checarDuplicado = listaDeItens.some(
    (elemento) => elemento.valor.toUpperCase() === compraItem.toUpperCase()
  );

  if (checarDuplicado) {
    alert("Item já existe!");
  } else {
    listaDeItens.push({
      valor: compraItem,
      checar: false,
    });
  }
  
  itenInput.value = "";
}

function mostrarItem() {
    ulItems.innerHTML = "";
    ulItensComprados.innerHTML = "";
  listaDeItens.forEach((elemento, index) => {
    if(elemento.checar){
        ulItensComprados.innerHTML += ` <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
        <div>
            <input type="checkbox" checked class="is-clickable" />  
            <span class="itens-comprados is-size-5">${elemento.valor}</span>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>`
    }else{

   
    ulItems.innerHTML += `<li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
        <div>
            <input type="checkbox" class="is-clickable" />
            <input type="text" class="is-size-5" value="${elemento.valor}"></input>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>`;
     }
  });

  const inputCheck = document.querySelectorAll('input[type="checkbox"]');

  inputCheck.forEach(i =>{
    i.addEventListener('click', (evento) =>{
     const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value');
     listaDeItens[valorDoElemento].checar = evento.target.checked;
     mostrarItem();
    })
  })
}
