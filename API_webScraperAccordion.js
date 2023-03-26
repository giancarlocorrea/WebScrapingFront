//const url = "https://giancarlowebscraping.herokuapp.com";
const url = "http://localhost:3000";

// Chamada da API para pegar todas as Oportunidades
function listaOportunidades() {
  var i = 0;
  axios
    .get(`${url}/Oportunidades`)
    .then((response) => {
      Spinner(true);
      response.data.forEach((oportunidade) => {
        i++;
        const accordionItem = document.createElement("div");
        accordionItem.classList.add("accordion-item");
        const accordionContent = `
          
            <h2 class="accordion-header " id="heading${i}">
              <button
                class="accordion-button collapsed text-bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse${i}"
                aria-expanded="true"
                aria-controls="collapse${i}"
                >
                ${oportunidade.licitacao}
              </button>
            </h2>
            <div
              id="collapse${i}"
              class="accordion-collapse collapse "
              aria-labelledby="heading${i}"
              data-bs-parent="#accordionExample"
              >
              
                <div class="accordion-body">${oportunidade.objeto}
                  <div class="botoes">
                    <button type="button" class="btn-close"></button>
                  </div>
                </div>
              
            </div>
          `;
        accordionItem.innerHTML = accordionContent;
        document.querySelector(".accordion").appendChild(accordionItem);
      });

      setTimeout(() => {
        Spinner(false);
      }, 1000);
      //if (response) Spinner(false);
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
