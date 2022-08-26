const url = "https://giancarlowebscraping.herokuapp.com";

// Chamada da API para pegar todas as Oportunidades
function Oportunidades() {
  axios
    .get(`${url}/Oportunidades`)
    .then((response) =>
      response.data.forEach((oportunidade) => {
        const tr = document.createElement("tr");
        const trConteudo = `
                      <td>${oportunidade.id}</td>
                      <td>${oportunidade.licitacao}</td>
                      <td>${oportunidade.status}</td>
                      <td>${oportunidade.objeto}</td>
                      <td class="primary salvar" onclick="detalhesLinha(this)"><a class="primary">Salvar</a></td>
              `;

        if (oportunidade.lida === "S") {
          tr.classList.add("lida");
        }

        tr.innerHTML = trConteudo;
        document.querySelector("table tbody").appendChild(tr);
      })
    )
    .catch((error) =>
      console.log(
        `Não foi possível acessar os dados pela rota /Oportunidades\n${error}`
      )
    );
}

function atualizaOportunidades(id) {
  axios
    .put(`${url}/atualizaOportunidades/${id}`)
    .then((response) => console.log(response))
    .catch((error) => console.log("Erro ao tentar atualizar a oportunidade"));
}
