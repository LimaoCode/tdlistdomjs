const input = document.querySelector(".texto");
const lista = document.getElementsByClassName("lista")[0];
document.querySelector(".adicionar").addEventListener("click", criaAssunto);

function criaAssunto() {
  let itemLista = document.createElement("li");
  itemLista.innerText = pegaDados();

  itemLista.classList.add("item-lista");
  lista.appendChild(itemLista);

  let botoes = document.createElement("div");
  botoes.classList.add("botoes");

  itemLista.appendChild(botoes);

  botoes.appendChild(criaBotao("concluir", "concluir", conclui));
  botoes.appendChild(criaBotao("excluir", "excluir", exclui));

  document.getElementsByClassName("texto")[0].value = "";
}

function criaBotao(className, text, action) {
  let botao = document.createElement("button");
  botao.classList.add(className);
  botao.innerText = text;
  botao.addEventListener("click", action);
  return botao;
}

function conclui() {
  this.closest(".item-lista").classList.toggle("hidden");
}

function exclui() {
  let item = this.closest(".item-lista");
  lista.removeChild(item);
}

function pegaDados() {
  return input.value;
}

function validaDados() {
  const itens = document.querySelectorAll(".item-lista");
  const inputValue = input.value.trim();
  let dadosCorretos = true;

  if (itens.length > 0) {
    itens.forEach(function (element) {
      const elementText = element.firstChild.textContent.trim();
      if (inputValue === elementText) {
        dadosCorretos = false;
      }
      alert("valor já inserido");
      return dadosCorretos;
    });
  }

  if (inputValue === "") {
    dadosCorretos = false;
  }
  alert("O campo nao pode ser inserido vazio");
  return dadosCorretos;
}
