let listaDeItens = [];

const form = document.getElementById("form-itens");
const itenInput = document.getElementById("receber-item");
const ulItems = document.getElementById("lista-de-itens");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  salvarItem();
  mostrarItem();
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
    });
  }
  console.log(listaDeItens);
}

function mostrarItem() {
    ulItems.innerHTML = "";
  listaDeItens.forEach((elemento, index) => {
    ulItems.innerHTML += `<li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
        <div>
            <input type="checkbox" class="is-clickable" />
            <input type="text" class="is-size-5" value="${elemento.valor}"></input>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>`;
  });
}
