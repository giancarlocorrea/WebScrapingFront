function detalhesLinha(link) {
  var linha = link.parentNode;
  //  linha.parentNode.removeChild(linha);

  //Adiciona a classe "lida" na colula status
  linha.cells[2].childNodes[0].classList.add("lida");
  linha.cells[2].childNodes[0].classList.add("botao");
  linha.cells[2].childNodes[0].innerText = "lida";

  linha.removeChild(linha.children[5]);

  atualizaOportunidades(Number(linha.cells[0].innerText));
}

function Spinner(show) {
  if (show) {
    document.querySelector(".accordion").style.display = "none";
    document.querySelector("#spinner").style.display = "hidden";
  } else {
    document.querySelector("#spinner").style.display = "none";
    document.querySelector(".accordion").style.display = "block";
  }
}
