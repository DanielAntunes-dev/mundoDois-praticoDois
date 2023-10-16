const receitas = [
  {
    titulo: "Arroz de Couve-Flor",
    imagem: "image/arroz-de-couve-flor-01-1024x576.jpg",
    preparo: `Deixe a couve-flor picada, adicione os ingredientes e refogue bem. 
          Adicione sal, tampe a panela e deixe cozinhar.`,
    ingredientes: ["Arroz", "Couve-flor", "cebola média", "Azeite"],
  },
  {
    titulo: "Bola de Café",
    imagem: "image/bolo de cafe.png",
    preparo: `Bata o açucar, as gemas e o café, adicione a farinha e o chocolate e mexa bem.
          Bata as claras e junte à mistura.`,
    ingredientes: [
      "Farinha de trigo",
      "Açúcar",
      "Café coado",
      "Chocolate em pó",
      "Ovos",
    ],
  },
  {
    titulo: "Coxinha de Brigadeiro",
    imagem: "image/coxinha de brigadeiro.jpg",
    preparo: `Junte o leite condensado, chocolate em pó e manteiga, aqueça o fogo baixo.
          Envolva os morangos e passe no granulado`,
    ingredientes: [
      "Leite condensado",
      "Chocolate em pó",
      "Manteiga",
      "Morango",
      "Chocolate granulado",
    ],
  },
];

function getListaIngredientes(ingredientes) {
  const listaHTML = `<ul>${ingredientes
    .map((ingrediente) => `<li>${ingrediente}</li>`)
    .join("")}</ul>`;
  return listaHTML;
}

function getCard(receita) {
  return `
        <div class="card">
          <img src="${receita.imagem}" class="card-img-top" alt="${
    receita.titulo
  }">
          <div class="card-body">
            <h5 class="card-title">${receita.titulo}</h5>
            <div class="card-text">
              <h6>Ingredientes:</h6>
              ${getListaIngredientes(receita.ingredientes)}
              <hr>
              <p>${receita.preparo}</p>
            </div>
          </div>
        </div>
      `;
}

function preencheCatalogo() {
  const pnlCatalogo = document.getElementById("pnlCatalogo");
  pnlCatalogo.innerHTML = "";
  receitas.forEach((receita) => {
    pnlCatalogo.innerHTML += getCard(receita);
  });
}
