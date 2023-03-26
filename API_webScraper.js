//const url = "https://giancarlowebscraping.herokuapp.com";
const url = "http://localhost:3000";

// Chamada da API para pegar todas as Oportunidades
function listaOportunidades() {
  axios
    .get(`${url}/Oportunidades`)
    .then((response) => {
      Spinner(true);
      response.data.forEach((oportunidade) => {
        const tr = document.createElement("tr");

        const botaoSalvar =
          oportunidade.lida != "S"
            ? `<td class="primary salvar" onclick="detalhesLinha(this)"><div class="botao botaoSalvar"> 
            <a class="primary">Salvar</a></div></td>`
            : "";

        const trConteudo = `
                      <td>${oportunidade.id}</td>
                      <td>${oportunidade.licitacao}</td>
                      <td><div id="status" class=${
                        oportunidade.lida === "S" ? "lida botao" : ""
                      }>${oportunidade.lida === "S" ? "lida" : ""}</div></td>
                      <td>${oportunidade.status}</td>
                      <td>${oportunidade.objeto}</td>
                      ${botaoSalvar}      
              `;

        tr.innerHTML = trConteudo;
        document.querySelector("table tbody").appendChild(tr);
      });
      if (response) Spinner(false);
    })
    .catch((error) =>
      console.log(
        `Não foi possível acessar os dados pela rota /Oportunidades\n${error}`
      )
    );
}

function atualizaOportunidades(id) {
  axios
    .put(`${url}/atualizaOportunidades/${id}`)
    .then()
    .catch((error) =>
      console.log(`Erro ao tentar atualizar a oportunidade: ${error}`)
    );
}
