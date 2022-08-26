function detalhesLinha(link) {
  var linha = link.parentNode;
  //  linha.parentNode.removeChild(linha);
  linha.classList.add("lida");
  atualizaOportunidades(Number(linha.childNodes[1].innerText));
}
